import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car } from "lucide-react";

interface CarStepProps {
  data: {
    carMileage: number;
    carType: string;
    fuelType: string;
  };
  onChange: (data: any) => void;
}

export const CarStep = ({ data, onChange }: CarStepProps) => {
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
          <Car className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Personal Vehicle</h3>
          <p className="text-muted-foreground">Your car usage details</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="carMileage">Annual Mileage (km/year)</Label>
          <Input
            id="carMileage"
            type="number"
            min="0"
            value={data.carMileage || ""}
            onChange={(e) => handleChange("carMileage", e.target.value)}
            placeholder="e.g., 10000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="carType">Car Type</Label>
          <Select
            value={data.carType}
            onValueChange={(value) => handleChange("carType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select car type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (Hatchback)</SelectItem>
              <SelectItem value="medium">Medium (Sedan)</SelectItem>
              <SelectItem value="large">Large (SUV)</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select
            value={data.fuelType}
            onValueChange={(value) => handleChange("fuelType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="petrol">Petrol</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="cng">CNG</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
