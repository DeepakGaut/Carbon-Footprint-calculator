import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShoppingBag } from "lucide-react";

interface SecondaryStepProps {
  data: {
    foodSpending: number;
    pharmaceuticals: number;
    clothing: number;
    electronics: number;
    paperProducts: number;
    recreationCulture: number;
    miscellaneous: number;
  };
  onChange: (data: any) => void;
}

export const SecondaryStep = ({ data, onChange }: SecondaryStepProps) => {
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
          <ShoppingBag className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Goods & Services</h3>
          <p className="text-muted-foreground">Annual spending on various categories (₹/year)</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="foodSpending">Food & Beverages</Label>
          <Input
            id="foodSpending"
            type="number"
            min="0"
            value={data.foodSpending || ""}
            onChange={(e) => handleChange("foodSpending", e.target.value)}
            placeholder="e.g., 50000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pharmaceuticals">Pharmaceuticals & Healthcare</Label>
          <Input
            id="pharmaceuticals"
            type="number"
            min="0"
            value={data.pharmaceuticals || ""}
            onChange={(e) => handleChange("pharmaceuticals", e.target.value)}
            placeholder="e.g., 15000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="clothing">Clothing & Footwear</Label>
          <Input
            id="clothing"
            type="number"
            min="0"
            value={data.clothing || ""}
            onChange={(e) => handleChange("clothing", e.target.value)}
            placeholder="e.g., 20000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="electronics">Electronics & Appliances</Label>
          <Input
            id="electronics"
            type="number"
            min="0"
            value={data.electronics || ""}
            onChange={(e) => handleChange("electronics", e.target.value)}
            placeholder="e.g., 30000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="paperProducts">Paper Products & Books</Label>
          <Input
            id="paperProducts"
            type="number"
            min="0"
            value={data.paperProducts || ""}
            onChange={(e) => handleChange("paperProducts", e.target.value)}
            placeholder="e.g., 5000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="recreationCulture">Recreation & Culture</Label>
          <Input
            id="recreationCulture"
            type="number"
            min="0"
            value={data.recreationCulture || ""}
            onChange={(e) => handleChange("recreationCulture", e.target.value)}
            placeholder="e.g., 25000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="miscellaneous">Other Goods & Services</Label>
          <Input
            id="miscellaneous"
            type="number"
            min="0"
            value={data.miscellaneous || ""}
            onChange={(e) => handleChange("miscellaneous", e.target.value)}
            placeholder="e.g., 10000"
          />
        </div>
      </div>
    </div>
  );
};
