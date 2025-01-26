import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CoffeePreferences {
  roastLevel: string;
  brewMethod: string;
  intensity: number;
  additives: string;
}

export function CoffeeRecommender() {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<CoffeePreferences>({
    roastLevel: "medium",
    brewMethod: "drip",
    intensity: 50,
    additives: "black",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Analyzing your preferences...",
      description: "Our AI is finding your perfect coffee match!",
    });
    // Here you would typically make an API call to your AI service
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">
          AI Coffee Recommender
        </h1>
        
        <Card className="p-6 shadow-lg bg-white/80 backdrop-blur">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Roast Level</Label>
              <RadioGroup
                defaultValue={preferences.roastLevel}
                onValueChange={(value) =>
                  setPreferences({ ...preferences, roastLevel: value })
                }
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Brewing Method</Label>
              <Select
                value={preferences.brewMethod}
                onValueChange={(value) =>
                  setPreferences({ ...preferences, brewMethod: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select brewing method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drip">Drip Coffee</SelectItem>
                  <SelectItem value="espresso">Espresso</SelectItem>
                  <SelectItem value="french">French Press</SelectItem>
                  <SelectItem value="pour">Pour Over</SelectItem>
                  <SelectItem value="cold">Cold Brew</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">
                Intensity Preference
              </Label>
              <Slider
                value={[preferences.intensity]}
                onValueChange={(value) =>
                  setPreferences({ ...preferences, intensity: value[0] })
                }
                max={100}
                step={1}
                className="w-full"
              />
              <div className="text-sm text-gray-500 text-center">
                {preferences.intensity}% intensity
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">How do you take it?</Label>
              <Select
                value={preferences.additives}
                onValueChange={(value) =>
                  setPreferences({ ...preferences, additives: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="cream">With Cream</SelectItem>
                  <SelectItem value="sugar">With Sugar</SelectItem>
                  <SelectItem value="both">Both Cream & Sugar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            >
              Get My Coffee Recommendation
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}