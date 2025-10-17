'use server';

/**
 * @fileOverview Generates style suggestions and color palettes based on an inspirational image or theme.
 *
 * - generateStyleSuggestion - A function that handles the style suggestion process.
 * - AIStyleSuggestionInput - The input type for the generateStyleSuggestion function.
 * - AIStyleSuggestionOutput - The return type for the generateStyleSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIStyleSuggestionInputSchema = z.object({
  imageUri: z
    .string()
    .optional()
    .describe(
      "An optional inspirational image as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  theme: z.string().optional().describe('An optional textual theme, e.g., \"ocean sunset\".'),
});

export type AIStyleSuggestionInput = z.infer<typeof AIStyleSuggestionInputSchema>;

const AIStyleSuggestionOutputSchema = z.object({
  colorPalette: z
    .array(z.string())
    .describe('An array of color hex codes that would suit the website.'),
  styleSuggestions: z
    .string()
    .describe('Style suggestions for the website, including typography and layout.'),
});

export type AIStyleSuggestionOutput = z.infer<typeof AIStyleSuggestionOutputSchema>;

export async function generateStyleSuggestion(
  input: AIStyleSuggestionInput
): Promise<AIStyleSuggestionOutput> {
  return aiStyleSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStyleSuggestionPrompt',
  input: {schema: AIStyleSuggestionInputSchema},
  output: {schema: AIStyleSuggestionOutputSchema},
  prompt: `You are an AI website style assistant. Analyze the provided image or theme and suggest a color palette (as an array of hex codes) and style suggestions (typography, layout ideas) for a website.

  Output the color palette as a JSON array of hex codes.
  Output the style suggestions as a paragraph.

  {{#if imageUri}}
  Inspirational Image: {{media url=imageUri}}
  {{/if}}
  {{#if theme}}
  Theme: {{{theme}}}
  {{/if}}
  `,
});

const aiStyleSuggestionFlow = ai.defineFlow(
  {
    name: 'aiStyleSuggestionFlow',
    inputSchema: AIStyleSuggestionInputSchema,
    outputSchema: AIStyleSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
