
'use server';

import { z } from 'zod';
import { generateStyleSuggestion } from '@/ai/flows/ai-style-suggestion';
import type { AIStyleSuggestionOutput } from '@/ai/flows/ai-style-suggestion';
import { contactSchema } from '@/lib/schemas';

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

  // For demonstration, we'll just log the data.
  // In a real application, you would send an email or save to a database.
  console.log('New contact form submission:', validatedFields.data);

  return { success: true, message: 'Your message has been sent successfully!' };
}
