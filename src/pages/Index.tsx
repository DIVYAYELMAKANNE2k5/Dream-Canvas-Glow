import { useState } from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DreamEntryForm } from "@/components/DreamEntryForm";
import { DreamGallery } from "@/components/DreamGallery";
import { ThemeToggle } from "@/components/ThemeToggle";

// Import dream images
import dream1 from "@/assets/dream-1.png";
import dream2 from "@/assets/dream-2.png";
import dream3 from "@/assets/dream-3.png";
import dream4 from "@/assets/dream-4.png";
import dream5 from "@/assets/dream-5.png";
import dream6 from "@/assets/dream-6.png";
import dream7 from "@/assets/dream-7.png";

export interface DreamEntry {
  id: string;
  text: string;
  mood: "calm" | "mysterious" | "whimsical" | "surreal";
  date: Date;
  title: string;
  image?: string;
}

// Sample dream entries with the uploaded images
const sampleDreams: DreamEntry[] = [
  {
    id: "sample-1",
    title: "Cosmic Ocean",
    text: "I found myself standing in shallow cosmic waters, surrounded by planets and shooting stars. The universe felt infinite yet intimate, as if I could reach out and touch the celestial bodies floating above.",
    mood: "mysterious",
    date: new Date(2024, 8, 20),
    image: dream1
  },
  {
    id: "sample-7",
    title: "Bridge to the Stars",
    text: "I was walking on a wooden bridge that stretched into the most beautiful sky I've ever seen. Purple and orange clouds swirled around me, with golden lights twinkling like fairy dust in the distance.",
    mood: "whimsical",
    date: new Date(2024, 8, 19),
    image: dream7
  },
  {
    id: "sample-2",
    title: "Divine Light",
    text: "A radiant figure descended from golden clouds, surrounded by warm, heavenly light. The scene felt peaceful and filled with divine presence, as if witnessing something sacred and eternal.",
    mood: "calm",
    date: new Date(2024, 8, 18),
    image: dream2
  },
  {
    id: "sample-4",
    title: "Alien Worlds",
    text: "I stood on a distant planet watching multiple moons and celestial bodies dance across a colorful sky. The landscape was both alien and beautiful, with colors that don't exist on Earth.",
    mood: "surreal",
    date: new Date(2024, 8, 17),
    image: dream4
  },
  {
    id: "sample-5",
    title: "Planetary Reflections",
    text: "Two figures walked across an otherworldly landscape where massive planets hung in the sky, their reflections shimmering in pools of water that seemed to mirror the cosmos itself.",
    mood: "mysterious",
    date: new Date(2024, 8, 16),
    image: dream5
  },
  {
    id: "sample-6",
    title: "Mystical Forest",
    text: "I wandered through an enchanted forest where purple and pink lights danced between ancient trees. Mysterious figures moved through the ethereal mist, and everything glowed with magical energy.",
    mood: "whimsical",
    date: new Date(2024, 8, 15),
    image: dream6
  },
  {
    id: "sample-3",
    title: "Moment of Reflection",
    text: "In my dream, I was alone on a hill at sunset, taking a moment to pray and reflect. The sky was painted in warm oranges and purples, and I felt a deep sense of peace and connection.",
    mood: "calm",
    date: new Date(2024, 8, 14),
    image: dream3
  }
];

const Index = () => {
  const [dreams, setDreams] = useState<DreamEntry[]>(sampleDreams);
  const [currentView, setCurrentView] = useState<"journal" | "gallery">("journal");

  const addDream = (dream: Omit<DreamEntry, "id" | "date">) => {
    const newDream: DreamEntry = {
      ...dream,
      id: crypto.randomUUID(),
      date: new Date(),
    };
    setDreams(prev => [newDream, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-hero transition-smooth">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dream Journal
              </h1>
              <p className="text-muted-foreground">Transform your dreams into art</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        {/* Navigation */}
        <nav className="flex gap-4 mb-8">
          <Button
            variant={currentView === "journal" ? "default" : "secondary"}
            onClick={() => setCurrentView("journal")}
            className="transition-bounce"
          >
            Write Dream
          </Button>
          <Button
            variant={currentView === "gallery" ? "default" : "secondary"}
            onClick={() => setCurrentView("gallery")}
            className="transition-bounce"
          >
            Dream Gallery ({dreams.length})
          </Button>
        </nav>

        {/* Content */}
        <main className="max-w-4xl mx-auto">
          {currentView === "journal" ? (
            <DreamEntryForm onSubmit={addDream} />
          ) : (
            <DreamGallery dreams={dreams} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;