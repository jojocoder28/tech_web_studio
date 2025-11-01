"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getAIStyleSuggestion, type AIFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import React from 'react';

const initialState: AIFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Generate Suggestions
    </Button>
  );
}

export function AIStyler() {
  const [state, formAction] = useActionState(getAIStyleSuggestion, initialState);

  return (
    <section id="ai-styler" className="w-full bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
            <Wand2 className="inline-block w-4 h-4 mr-2" />
            AI Style Assistant
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get AI-Powered Style Recommendations</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Not sure what you want? Describe a theme or upload an image, and our AI will generate a color palette and design ideas for you.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2 lg:gap-12">
          <Card className="p-2 bg-card/50 dark:bg-card/50 backdrop-blur-sm border-border/50 dark:border-border/50">
            <CardContent className="p-6">
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="theme" className="text-sm font-medium text-muted-foreground">Theme or Keywords</label>
                  <Textarea
                    id="theme"
                    name="theme"
                    placeholder="e.g., 'minimalist coffee shop', 'ocean sunset'"
                    className="min-h-[100px] bg-background/70"
                  />
                </div>
                <div className="space-y-2">
                    <label htmlFor="image" className="text-sm font-medium text-muted-foreground">Or Upload an Image</label>
                    <Input id="image" name="image" type="file" accept="image/*" className="bg-background/70 file:text-foreground" />
                </div>
                {state.error && (
                    <Alert variant="destructive">
                        <AlertDescription>{state.error}</AlertDescription>
                    </Alert>
                )}
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-6">
            {state.suggestion ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-headline font-semibold mb-3">Suggested Color Palette</h3>
                  <div className="flex flex-wrap gap-3">
                    {state.suggestion.colorPalette.map((color, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-lg border-2 border-border/50 glow-shadow"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-mono text-sm text-muted-foreground">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold mb-3">Style Suggestions</h3>
                  <p className="text-muted-foreground">{state.suggestion.styleSuggestions}</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <Wand2 className="w-12 h-12 mx-auto mb-4" />
                <p>Your AI-generated style suggestions will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
