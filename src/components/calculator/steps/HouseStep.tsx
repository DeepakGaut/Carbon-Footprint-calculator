import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";

interface HouseStepProps {
  data: {
    electricity: number;
    naturalGas: number;
    heatingOil: number;
    coal: number;
    lpg: number;
    propane: number;
    woodenPellets: number;
    householdMembers: number;
  };
  onChange: (data: any) => void;
}

export const HouseStep = ({ data, onChange }: HouseStepProps) => {
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
          <Home className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Household Energy</h3>
          <p className="text-muted-foreground">Enter your monthly household consumption</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="electricity">Electricity Bill (₹/month)</Label>
          <Input
            id="electricity"
            type="number"
            min="0"
            value={data.electricity || ""}
            onChange={(e) => handleChange("electricity", e.target.value)}
            placeholder="e.g., 1500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="naturalGas">Natural Gas (kWh/month)</Label>
          <Input
            id="naturalGas"
            type="number"
            min="0"
            value={data.naturalGas || ""}
            onChange={(e) => handleChange("naturalGas", e.target.value)}
            placeholder="e.g., 150"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heatingOil">Heating Oil (Litres/month)</Label>
          <Input
            id="heatingOil"
            type="number"
            min="0"
            value={data.heatingOil || ""}
            onChange={(e) => handleChange("heatingOil", e.target.value)}
            placeholder="e.g., 50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coal">Coal (kg/month)</Label>
          <Input
            id="coal"
            type="number"
            min="0"
            value={data.coal || ""}
            onChange={(e) => handleChange("coal", e.target.value)}
            placeholder="e.g., 10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lpg">LPG (Cylinders/year)</Label>
          <Input
            id="lpg"
            type="number"
            min="0"
            value={data.lpg || ""}
            onChange={(e) => handleChange("lpg", e.target.value)}
            placeholder="e.g., 12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="propane">Propane (Litres/month)</Label>
          <Input
            id="propane"
            type="number"
            min="0"
            value={data.propane || ""}
            onChange={(e) => handleChange("propane", e.target.value)}
            placeholder="e.g., 20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="woodenPellets">Wooden Pellets (kg/month)</Label>
          <Input
            id="woodenPellets"
            type="number"
            min="0"
            value={data.woodenPellets || ""}
            onChange={(e) => handleChange("woodenPellets", e.target.value)}
            placeholder="e.g., 100"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="householdMembers">Household Members</Label>
          <Input
            id="householdMembers"
            type="number"
            min="1"
            value={data.householdMembers || ""}
            onChange={(e) => handleChange("householdMembers", e.target.value)}
            placeholder="e.g., 4"
          />
        </div>
      </div>
    </div>
  );
};
