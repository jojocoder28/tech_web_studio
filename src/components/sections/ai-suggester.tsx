"use client";

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getAIStyleSuggestion, type AIFormState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, Upload } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
      Generate Suggestions
    </Button>
  );
}

export function AiSuggester() {
  const initialState: AIFormState = { message: '', suggestion: undefined, error: undefined };
  const [state, formAction] = useFormState(getAIStyleSuggestion, initialState);

  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  
  return (
    <section id="ai-tool" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">AI-Powered Style Helper</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stuck for ideas? Use my AI-powered tool to generate a unique color palette and style suggestions based on a theme or an inspirational image.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Get Inspired</CardTitle>
              <CardDescription>Enter a theme or upload an image to start.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme (e.g., "ocean sunset")</Label>
                  <Input id="theme" name="theme" placeholder="Enter a descriptive theme" />
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <span className="flex-shrink-0 px-2">OR</span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Inspirational Image</Label>
                  <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
                </div>

                {imagePreview && (
                    <div className="mt-4">
                        <img src={imagePreview} alt="Image preview" className="rounded-md max-h-48 mx-auto" />
                    </div>
                )}

                <SubmitButton />

                {state.error && (
                    <Alert variant="destructive">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{state.error}</AlertDescription>
                    </Alert>
                )}
              </form>
            </CardContent>
          </Card>
          
          <div className="h-full">
            {state.suggestion ? (
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-headline">Your Style Suggestions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Color Palette:</h3>
                    <div className="flex flex-wrap gap-4">
                      {state.suggestion.colorPalette.map((color, index) => (
                        <div key={index} className="flex flex-col items-center gap-1">
                          <div
                            className="w-16 h-16 rounded-lg shadow-inner border"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs font-mono">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Style Ideas:</h3>
                    <p className="text-sm text-muted-foreground">{state.suggestion.styleSuggestions}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
                <Card className="h-full flex flex-col items-center justify-center text-center p-8 border-dashed">
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 font-headline text-lg font-semibold">Results will appear here</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Generate a style to see the magic happen.
                    </p>
                </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
