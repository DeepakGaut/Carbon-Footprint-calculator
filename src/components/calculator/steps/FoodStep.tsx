import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Utensils } from "lucide-react";

interface FoodStepProps {
  data: {
    diet: string;
    localFood: string;
    foodWaste: string;
  };
  onChange: (data: any) => void;
}

export const FoodStep = ({ data, onChange }: FoodStepProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Utensils className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Food & Diet</h3>
          <p className="text-muted-foreground">Your eating habits and food choices</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="diet">Primary Diet Type</Label>
          <Select
            value={data.diet}
            onValueChange={(value) => onChange({ ...data, diet: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="mixed">Mixed (includes meat)</SelectItem>
              <SelectItem value="meat-heavy">Meat-Heavy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="localFood">How often do you buy local/seasonal food?</Label>
          <Select
            value={data.localFood}
            onValueChange={(value) => onChange({ ...data, localFood: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="always">Always</SelectItem>
              <SelectItem value="often">Often</SelectItem>
              <SelectItem value="sometimes">Sometimes</SelectItem>
              <SelectItem value="rarely">Rarely</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="foodWaste">Food Waste Level</Label>
          <Select
            value={data.foodWaste}
            onValueChange={(value) => onChange({ ...data, foodWaste: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimal">Minimal - I waste very little</SelectItem>
              <SelectItem value="moderate">Moderate - Average waste</SelectItem>
              <SelectItem value="high">High - I waste quite a bit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
