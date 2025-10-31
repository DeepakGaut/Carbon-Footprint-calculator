import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { calculateCarbonFootprint } from "@/utils/carbonCalculations";
import { FormData } from "./CalculatorForm";
import { RotateCcw, TrendingUp, Leaf, AlertCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ResultsViewProps {
  formData: FormData;
  onReset: () => void;
}

export const ResultsView = ({ formData, onReset }: ResultsViewProps) => {
  const results = calculateCarbonFootprint(formData);
  const averageFootprint = 6.5; // Average carbon footprint in tonnes CO2e per year in India
  const worldAverage = 4.0;
  const targetFootprint = 2.0; // Target to limit global warming

  const comparisonPercentage = ((results.total / averageFootprint) * 100).toFixed(0);

  const breakdownData = [
    { name: "House", value: results.breakdown.house, color: "hsl(234, 89%, 30%)" },
    { name: "Flights", value: results.breakdown.flights, color: "hsl(234, 89%, 40%)" },
    { name: "Car", value: results.breakdown.car, color: "hsl(234, 70%, 50%)" },
    { name: "Motorbike", value: results.breakdown.motorbike, color: "hsl(234, 60%, 55%)" },
    { name: "Public Transport", value: results.breakdown.publicTransport, color: "hsl(234, 50%, 60%)" },
    { name: "Food", value: results.breakdown.food, color: "hsl(186, 70%, 45%)" },
    { name: "Goods & Services", value: results.breakdown.secondary, color: "hsl(186, 60%, 55%)" },
    { name: "Waste", value: results.breakdown.waste, color: "hsl(186, 50%, 65%)" },
  ].filter((item) => item.value > 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/20">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Your Carbon Footprint</h2>
          <div className="text-6xl font-bold text-primary">
            {results.total.toFixed(2)}
          </div>
          <p className="text-xl text-muted-foreground">tonnes CO₂e per year</p>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-primary mt-1" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">vs India Average</p>
              <p className="text-2xl font-bold text-foreground">{comparisonPercentage}%</p>
              <p className="text-xs text-muted-foreground mt-1">
                {results.total > averageFootprint ? "Above" : "Below"} average ({averageFootprint} tonnes)
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-accent mt-1" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">vs World Average</p>
              <p className="text-2xl font-bold text-foreground">
                {((results.total / worldAverage) * 100).toFixed(0)}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                World average: {worldAverage} tonnes
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Leaf className="w-6 h-6 text-primary mt-1" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">To Climate Target</p>
              <p className="text-2xl font-bold text-foreground">
                {((results.total / targetFootprint) * 100).toFixed(0)}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Target: {targetFootprint} tonnes (Paris Agreement)
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">Emissions Breakdown</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={breakdownData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [`${value.toFixed(2)} tonnes CO₂e`, "Emissions"]}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {breakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">
          Personalized Recommendations
        </h3>
        <div className="space-y-4">
          {results.recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                {index + 1}
              </div>
              <p className="text-muted-foreground leading-relaxed">{recommendation}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onReset}
          size="lg"
          variant="outline"
          className="gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Calculate Again
        </Button>
      </div>
    </div>
  );
};
