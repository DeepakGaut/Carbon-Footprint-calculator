import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane } from "lucide-react";

interface FlightsStepProps {
  data: {
    shortHaulFlights: number;
    mediumHaulFlights: number;
    longHaulFlights: number;
    flightClass: string;
  };
  onChange: (data: any) => void;
}

export const FlightsStep = ({ data, onChange }: FlightsStepProps) => {
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
          <Plane className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Air Travel</h3>
          <p className="text-muted-foreground">Number of return flights per year</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="shortHaulFlights">
            Short-haul Flights (&lt;3 hours)
          </Label>
          <Input
            id="shortHaulFlights"
            type="number"
            min="0"
            value={data.shortHaulFlights || ""}
            onChange={(e) => handleChange("shortHaulFlights", e.target.value)}
            placeholder="e.g., 2"
          />
          <p className="text-xs text-muted-foreground">Delhi to Mumbai, Kolkata to Bangalore</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mediumHaulFlights">
            Medium-haul Flights (3-6 hours)
          </Label>
          <Input
            id="mediumHaulFlights"
            type="number"
            min="0"
            value={data.mediumHaulFlights || ""}
            onChange={(e) => handleChange("mediumHaulFlights", e.target.value)}
            placeholder="e.g., 1"
          />
          <p className="text-xs text-muted-foreground">India to Dubai, India to Bangkok</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="longHaulFlights">
            Long-haul Flights (&gt;6 hours)
          </Label>
          <Input
            id="longHaulFlights"
            type="number"
            min="0"
            value={data.longHaulFlights || ""}
            onChange={(e) => handleChange("longHaulFlights", e.target.value)}
            placeholder="e.g., 0"
          />
          <p className="text-xs text-muted-foreground">India to USA, Europe, Australia</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="flightClass">Typical Flight Class</Label>
          <Select
            value={data.flightClass}
            onValueChange={(value) => handleChange("flightClass", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium-economy">Premium Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
