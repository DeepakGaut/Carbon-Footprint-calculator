import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { HouseStep } from "./steps/HouseStep";
import { FlightsStep } from "./steps/FlightsStep";
import { CarStep } from "./steps/CarStep";
import { MotorbikeStep } from "./steps/MotorbikeStep";
import { PublicTransportStep } from "./steps/PublicTransportStep";
import { FoodStep } from "./steps/FoodStep";
import { SecondaryStep } from "./steps/SecondaryStep";
import { WasteStep } from "./steps/WasteStep";
import { ResultsView } from "./ResultsView";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FormData {
  house: {
    electricity: number;
    naturalGas: number;
    heatingOil: number;
    coal: number;
    lpg: number;
    propane: number;
    woodenPellets: number;
    householdMembers: number;
  };
  flights: {
    shortHaulFlights: number;
    mediumHaulFlights: number;
    longHaulFlights: number;
    flightClass: string;
  };
  car: {
    carMileage: number;
    carType: string;
    fuelType: string;
  };
  motorbike: {
    motorbikeMileage: number;
    motorbikeType: string;
  };
  publicTransport: {
    busKm: number;
    trainKm: number;
    metroKm: number;
    taxiKm: number;
  };
  food: {
    diet: string;
    localFood: string;
    foodWaste: string;
  };
  secondary: {
    foodSpending: number;
    pharmaceuticals: number;
    clothing: number;
    electronics: number;
    paperProducts: number;
    recreationCulture: number;
    miscellaneous: number;
  };
  waste: {
    recycling: string;
    composting: string;
  };
}

export const CalculatorForm = () => {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    house: {
      electricity: 0,
      naturalGas: 0,
      heatingOil: 0,
      coal: 0,
      lpg: 0,
      propane: 0,
      woodenPellets: 0,
      householdMembers: 1,
    },
    flights: {
      shortHaulFlights: 0,
      mediumHaulFlights: 0,
      longHaulFlights: 0,
      flightClass: "economy",
    },
    car: {
      carMileage: 0,
      carType: "medium",
      fuelType: "petrol",
    },
    motorbike: {
      motorbikeMileage: 0,
      motorbikeType: "scooter",
    },
    publicTransport: {
      busKm: 0,
      trainKm: 0,
      metroKm: 0,
      taxiKm: 0,
    },
    food: {
      diet: "mixed",
      localFood: "sometimes",
      foodWaste: "moderate",
    },
    secondary: {
      foodSpending: 0,
      pharmaceuticals: 0,
      clothing: 0,
      electronics: 0,
      paperProducts: 0,
      recreationCulture: 0,
      miscellaneous: 0,
    },
    waste: {
      recycling: "sometimes",
      composting: "no",
    },
  });

  const totalSteps = 8;
  const progress = (step / totalSteps) * 100;

  const stepTitles = [
    "House",
    "Flights",
    "Car",
    "Motorbike",
    "Public Transport",
    "Food",
    "Secondary",
    "Waste",
  ];

  const updateFormData = (section: keyof FormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setStep(1);
  };

  if (showResults) {
    return <ResultsView formData={formData} onReset={handleReset} />;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>
            Step {step} of {totalSteps}: {stepTitles[step - 1]}
          </span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="min-h-[450px]">
        {step === 1 && (
          <HouseStep
            data={formData.house}
            onChange={(data) => updateFormData("house", data)}
          />
        )}
        {step === 2 && (
          <FlightsStep
            data={formData.flights}
            onChange={(data) => updateFormData("flights", data)}
          />
        )}
        {step === 3 && (
          <CarStep
            data={formData.car}
            onChange={(data) => updateFormData("car", data)}
          />
        )}
        {step === 4 && (
          <MotorbikeStep
            data={formData.motorbike}
            onChange={(data) => updateFormData("motorbike", data)}
          />
        )}
        {step === 5 && (
          <PublicTransportStep
            data={formData.publicTransport}
            onChange={(data) => updateFormData("publicTransport", data)}
          />
        )}
        {step === 6 && (
          <FoodStep
            data={formData.food}
            onChange={(data) => updateFormData("food", data)}
          />
        )}
        {step === 7 && (
          <SecondaryStep
            data={formData.secondary}
            onChange={(data) => updateFormData("secondary", data)}
          />
        )}
        {step === 8 && (
          <WasteStep
            data={formData.waste}
            onChange={(data) => updateFormData("waste", data)}
          />
        )}
      </div>

      <div className="flex justify-between pt-6 border-t">
        <Button onClick={handleBack} variant="outline" disabled={step === 1}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90">
          {step === totalSteps ? "Calculate" : "Next"}
          {step < totalSteps && <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
};
