import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Bus, Train } from "lucide-react";

interface PublicTransportStepProps {
  data: {
    busKm: number;
    trainKm: number;
    metroKm: number;
    taxiKm: number;
  };
  onChange: (data: any) => void;
}

export const PublicTransportStep = ({ data, onChange }: PublicTransportStepProps) => {
  const handleChange = (field: string, value: string) => {
    onChange({
      ...data,
      [field]: parseFloat(value) || 0,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-primary/10">
          <Bus className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Public Transport</h3>
          <p className="text-muted-foreground">Annual distance traveled by public transport</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="busKm">Bus (km/year)</Label>
          <Input
            id="busKm"
            type="number"
            min="0"
            value={data.busKm || ""}
            onChange={(e) => handleChange("busKm", e.target.value)}
            placeholder="e.g., 2000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="trainKm">Train (km/year)</Label>
          <Input
            id="trainKm"
            type="number"
            min="0"
            value={data.trainKm || ""}
            onChange={(e) => handleChange("trainKm", e.target.value)}
            placeholder="e.g., 3000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="metroKm">Metro/Tram (km/year)</Label>
          <Input
            id="metroKm"
            type="number"
            min="0"
            value={data.metroKm || ""}
            onChange={(e) => handleChange("metroKm", e.target.value)}
            placeholder="e.g., 1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxiKm">Taxi/Cab (km/year)</Label>
          <Input
            id="taxiKm"
            type="number"
            min="0"
            value={data.taxiKm || ""}
            onChange={(e) => handleChange("taxiKm", e.target.value)}
            placeholder="e.g., 500"
          />
        </div>
      </div>
    </div>
  );
};
