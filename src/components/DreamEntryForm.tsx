import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Wand2 } from "lucide-react";
import { toast } from "sonner";
import type { DreamEntry } from "@/pages/Index";

// Example dream images (in real app, these would be AI-generated)
import dreamExample1 from "@/assets/dream-example-1.jpg";
import dreamExample2 from "@/assets/dream-example-2.jpg";
import dreamExample3 from "@/assets/dream-example-3.jpg";

interface DreamEntryFormProps {
  onSubmit: (dream: Omit<DreamEntry, "id" | "date">) => void;
}

const moodToImage = {
  calm: dreamExample1,
  mysterious: dreamExample2,
  whimsical: dreamExample3,
  surreal: dreamExample1,
};

export const DreamEntryForm = ({ onSubmit }: DreamEntryFormProps) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [mood, setMood] = useState<DreamEntry["mood"]>("calm");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !text.trim()) {
      toast.error("Please fill in both title and dream description");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const dreamEntry = {
      title: title.trim(),
      text: text.trim(),
      mood,
      image: moodToImage[mood],
    };

    onSubmit(dreamEntry);
    
    // Reset form
    setTitle("");
    setText("");
    setMood("calm");
    setIsGenerating(false);
    
    toast.success("Dream visualization created! ✨");
  };

  return (
    <Card className="shadow-dream border-0 bg-card/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Wand2 className="w-6 h-6 text-primary" />
          Record Your Dream
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Dream Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your dream a title..."
              className="transition-smooth focus:shadow-glow"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mood">Dream Mood</Label>
            <Select value={mood} onValueChange={(value) => setMood(value as DreamEntry["mood"])}>
              <SelectTrigger className="transition-smooth focus:shadow-glow">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="calm">🌊 Calm & Peaceful</SelectItem>
                <SelectItem value="mysterious">🌙 Mysterious & Dark</SelectItem>
                <SelectItem value="whimsical">✨ Whimsical & Playful</SelectItem>
                <SelectItem value="surreal">🎭 Surreal & Abstract</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">Dream Description</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Describe your dream in detail... What did you see? How did it feel? What happened?"
              className="min-h-32 transition-smooth focus:shadow-glow resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isGenerating}
            className="w-full bg-gradient-primary border-0 text-primary-foreground shadow-dream hover:shadow-glow transition-bounce"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                Creating Visualization...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Transform into Art
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};