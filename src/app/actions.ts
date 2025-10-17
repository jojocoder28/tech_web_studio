
'use server';

import { z } from 'zod';
import { generateStyleSuggestion } from '@/ai/flows/ai-style-suggestion';
import type { AIStyleSuggestionOutput } from '@/ai/flows/ai-style-suggestion';
import { contactSchema } from '@/lib/schemas';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';
import React from 'react';

// AI Style Suggestion Action
export type AIFormState = {
    message: string;
    suggestion?: AIStyleSuggestionOutput;
    error?: string;
};

export async function getAIStyleSuggestion(prevState: AIFormState, formData: FormData): Promise<AIFormState> {
    const theme = formData.get('theme') as string;
    const imageFile = formData.get('image') as File;

    if (!theme && (!imageFile || imageFile.size === 0)) {
        return { message: '', error: 'Please provide a theme or an image.' };
    }

    let imageUri: string | undefined;

    if (imageFile && imageFile.size > 0) {
        if (!imageFile.type.startsWith('image/')) {
            return { message: '', error: 'Invalid file type. Please upload an image.' };
        }
        try {
            const arrayBuffer = await imageFile.arrayBuffer();
            const base64 = Buffer.from(arrayBuffer).toString('base64');
            imageUri = `data:${imageFile.type};base64,${base64}`;
        } catch (e) {
            console.error(e);
            return { message: '', error: 'Failed to process the image.' };
        }
    }
    
    try {
        const result = await generateStyleSuggestion({ theme, imageUri });
        return { message: 'Here are your style suggestions!', suggestion: result };
    } catch (error) {
        console.error('AI Suggestion Error:', error);
        return { message: '', error: 'An error occurred while generating suggestions. Please try again.' };
    }
}


// Contact Form Action
export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  const { name, email, message } = validatedFields.data;

  if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not set.');
      return { success: false, message: 'Server configuration error: Email could not be sent.' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'dasjojo7@gmail.com',
      subject: 'New Message from Tech Web Studio Contact Form',
      react: React.createElement(ContactFormEmail, {
        name,
        email,
        message,
      }),
    });
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'There was a problem sending your message. Please try again later.' };
  }
}
