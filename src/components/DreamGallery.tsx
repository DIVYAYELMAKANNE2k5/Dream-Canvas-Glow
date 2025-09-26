import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Palette } from "lucide-react";
import type { DreamEntry } from "@/pages/Index";

interface DreamGalleryProps {
  dreams: DreamEntry[];
}

const moodColors = {
  calm: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
  mysterious: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
  whimsical: "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300",
  surreal: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300",
};

const moodEmojis = {
  calm: "🌊",
  mysterious: "🌙",
  whimsical: "✨",
  surreal: "🎭",
};

export const DreamGallery = ({ dreams }: DreamGalleryProps) => {
  if (dreams.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="p-6 bg-gradient-secondary rounded-3xl inline-block shadow-dream mb-6">
          <Palette className="w-16 h-16 text-primary mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">No Dreams Yet</h3>
        <p className="text-muted-foreground">
          Start by recording your first dream to see it transformed into beautiful art
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Your Dream Gallery</h2>
        <p className="text-muted-foreground">
          Beautiful visualizations of your inner world
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dreams.map((dream) => (
          <Card
            key={dream.id}
            className="group hover:shadow-glow transition-smooth border-0 bg-card/60 backdrop-blur-sm overflow-hidden"
          >
            <div className="aspect-video relative overflow-hidden">
              {dream.image && (
                <img
                  src={dream.image}
                  alt={dream.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-2">{dream.title}</h3>
                <div className="flex items-center gap-2">
                  <Badge className={moodColors[dream.mood]}>
                    {moodEmojis[dream.mood]} {dream.mood}
                  </Badge>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                {dream.text}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {dream.date.toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};