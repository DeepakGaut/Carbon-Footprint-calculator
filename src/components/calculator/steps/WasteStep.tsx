import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from "lucide-react";

interface WasteStepProps {
  data: {
    recycling: string;
    composting: string;
  };
  onChange: (data: any) => void;
}

export const WasteStep = ({ data, onChange }: WasteStepProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Trash2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Waste Management</h3>
          <p className="text-muted-foreground">Your recycling and waste habits</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="recycling">Do you recycle?</Label>
          <Select
            value={data.recycling}
            onValueChange={(value) => onChange({ ...data, recycling: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="always">Always - Most items</SelectItem>
              <SelectItem value="often">Often - Regular recycling</SelectItem>
              <SelectItem value="sometimes">Sometimes - Occasional recycling</SelectItem>
              <SelectItem value="rarely">Rarely - Minimal recycling</SelectItem>
              <SelectItem value="never">Never</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="composting">Do you compost organic waste?</Label>
          <Select
            value={data.composting}
            onValueChange={(value) => onChange({ ...data, composting: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes - Regular composting</SelectItem>
              <SelectItem value="sometimes">Sometimes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
