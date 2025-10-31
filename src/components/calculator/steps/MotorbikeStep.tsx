import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bike } from "lucide-react";

interface MotorbikeStepProps {
  data: {
    motorbikeMileage: number;
    motorbikeType: string;
  };
  onChange: (data: any) => void;
}

export const MotorbikeStep = ({ data, onChange }: MotorbikeStepProps) => {
  const handleChange = (field: string, value: string) => {
    const numValue = parseFloat(value);
    onChange({
      ...data,
      [field]: isNaN(numValue) ? value : numValue,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-primary/10">
          <Bike className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Motorbike / Two-Wheeler</h3>
          <p className="text-muted-foreground">Your two-wheeler usage details</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="motorbikeMileage">Annual Mileage (km/year)</Label>
          <Input
            id="motorbikeMileage"
            type="number"
            min="0"
            value={data.motorbikeMileage || ""}
            onChange={(e) => handleChange("motorbikeMileage", e.target.value)}
            placeholder="e.g., 5000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="motorbikeType">Motorbike Type</Label>
          <Select
            value={data.motorbikeType}
            onValueChange={(value) => handleChange("motorbikeType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scooter">Scooter/Moped (&lt;125cc)</SelectItem>
              <SelectItem value="small">Small (125-250cc)</SelectItem>
              <SelectItem value="medium">Medium (250-500cc)</SelectItem>
              <SelectItem value="large">Large (&gt;500cc)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
