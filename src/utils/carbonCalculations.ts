import { FormData } from "@/components/calculator/CalculatorForm";

export const calculateCarbonFootprint = (data: FormData) => {
  // HOUSE EMISSIONS
  const electricityEmissions = (data.house.electricity * 12 / 7) * 0.00082; // ₹7 per kWh avg
  const naturalGasEmissions = data.house.naturalGas * 12 * 0.00202; // kgCO2e per kWh
  const heatingOilEmissions = data.house.heatingOil * 12 * 2.68; // kgCO2e per litre
  const coalEmissions = data.house.coal * 12 * 2.42; // kgCO2e per kg
  const lpgEmissions = data.house.lpg * 14.2 * 2.98; // 14.2kg per cylinder, 2.98 kgCO2e/kg
  const propaneEmissions = data.house.propane * 12 * 1.51; // kgCO2e per litre
  const woodPelletsEmissions = data.house.woodenPellets * 12 * 0.39; // kgCO2e per kg
  
  const houseTotal = (electricityEmissions + naturalGasEmissions + heatingOilEmissions + 
    coalEmissions + lpgEmissions + propaneEmissions + woodPelletsEmissions) / 1000; // Convert to tonnes

  // FLIGHT EMISSIONS
  const flightClassFactors = {
    economy: 1.0,
    "premium-economy": 1.6,
    business: 2.4,
    first: 4.0,
  };

  const classFactor = flightClassFactors[data.flights.flightClass as keyof typeof flightClassFactors] || 1.0;
  const radiativeForcing = 1.9; // Non-CO2 effects multiplier

  const shortHaulEmissions = data.flights.shortHaulFlights * 1000 * 0.158 * classFactor * radiativeForcing / 1000; // tonnes
  const mediumHaulEmissions = data.flights.mediumHaulFlights * 2500 * 0.150 * classFactor * radiativeForcing / 1000;
  const longHaulEmissions = data.flights.longHaulFlights * 7000 * 0.147 * classFactor * radiativeForcing / 1000;
  
  const flightsTotal = shortHaulEmissions + mediumHaulEmissions + longHaulEmissions;

  // CAR EMISSIONS
  const carFuelRates = {
    small: 0.06, // L/km
    medium: 0.08,
    large: 0.11,
    luxury: 0.13,
  };

  const fuelEmissionFactors = {
    petrol: 2.31, // kgCO2e/L
    diesel: 2.68,
    cng: 1.85,
    electric: 0.12, // kgCO2e/km (grid average)
    hybrid: 1.50, // average
  };

  const carFuelRate = carFuelRates[data.car.carType as keyof typeof carFuelRates] || 0.08;
  const carEmissionFactor = fuelEmissionFactors[data.car.fuelType as keyof typeof fuelEmissionFactors] || 2.31;
  
  let carEmissions = 0;
  if (data.car.fuelType === "electric") {
    carEmissions = data.car.carMileage * carEmissionFactor / 1000;
  } else {
    carEmissions = data.car.carMileage * carFuelRate * carEmissionFactor / 1000;
  }

  // MOTORBIKE EMISSIONS
  const motorbikeFuelRates = {
    scooter: 0.025, // L/km
    small: 0.030,
    medium: 0.040,
    large: 0.055,
  };

  const motorbikeFuelRate = motorbikeFuelRates[data.motorbike.motorbikeType as keyof typeof motorbikeFuelRates] || 0.030;
  const motorbikeEmissions = data.motorbike.motorbikeMileage * motorbikeFuelRate * 2.31 / 1000; // Petrol

  // PUBLIC TRANSPORT EMISSIONS
  const publicTransportFactors = {
    bus: 0.103, // kgCO2e/km
    train: 0.041,
    metro: 0.035,
    taxi: 0.180,
  };

  const busEmissions = data.publicTransport.busKm * publicTransportFactors.bus / 1000;
  const trainEmissions = data.publicTransport.trainKm * publicTransportFactors.train / 1000;
  const metroEmissions = data.publicTransport.metroKm * publicTransportFactors.metro / 1000;
  const taxiEmissions = data.publicTransport.taxiKm * publicTransportFactors.taxi / 1000;
  
  const publicTransportTotal = busEmissions + trainEmissions + metroEmissions + taxiEmissions;

  // FOOD EMISSIONS
  const dietEmissions = {
    vegan: 1.5,
    vegetarian: 1.7,
    mixed: 2.5,
    "meat-heavy": 3.3,
  };

  const localFoodFactor = {
    always: 0.9,
    often: 0.95,
    sometimes: 1.0,
    rarely: 1.1,
  };

  const foodWasteFactor = {
    minimal: 0.9,
    moderate: 1.0,
    high: 1.15,
  };

  const foodTotal =
    dietEmissions[data.food.diet as keyof typeof dietEmissions] *
    localFoodFactor[data.food.localFood as keyof typeof localFoodFactor] *
    foodWasteFactor[data.food.foodWaste as keyof typeof foodWasteFactor];

  // SECONDARY (Goods & Services) EMISSIONS
  // Emission intensity per ₹1000 spent
  const sectorFactors = {
    food: 2.5,
    pharmaceuticals: 1.8,
    clothing: 3.2,
    electronics: 2.0,
    paper: 1.5,
    recreation: 1.3,
    miscellaneous: 2.0,
  };

  const secondaryEmissions = (
    data.secondary.foodSpending * sectorFactors.food +
    data.secondary.pharmaceuticals * sectorFactors.pharmaceuticals +
    data.secondary.clothing * sectorFactors.clothing +
    data.secondary.electronics * sectorFactors.electronics +
    data.secondary.paperProducts * sectorFactors.paper +
    data.secondary.recreationCulture * sectorFactors.recreation +
    data.secondary.miscellaneous * sectorFactors.miscellaneous
  ) / 1000000; // Convert ₹ to tonnes CO2e

  // WASTE EMISSIONS
  const recyclingFactor = {
    always: 0.3,
    often: 0.4,
    sometimes: 0.5,
    rarely: 0.6,
    never: 0.7,
  };

  const compostingFactor = {
    yes: 0.8,
    sometimes: 0.9,
    no: 1.0,
  };

  const wasteTotal =
    0.5 *
    recyclingFactor[data.waste.recycling as keyof typeof recyclingFactor] *
    compostingFactor[data.waste.composting as keyof typeof compostingFactor];

  const transportationTotal = carEmissions + motorbikeEmissions + publicTransportTotal + flightsTotal;
  const total = houseTotal + transportationTotal + foodTotal + secondaryEmissions + wasteTotal;

  // Generate recommendations
  const recommendations: string[] = [];

  if (houseTotal > 2.0) {
    recommendations.push(
      "Consider switching to renewable energy sources, using energy-efficient appliances, and improving home insulation to reduce household emissions."
    );
  }

  if (flightsTotal > 1.5) {
    recommendations.push(
      "Air travel has a significant carbon footprint. Consider reducing flights, choosing economy class, or purchasing carbon offsets."
    );
  }

  if (carEmissions > 1.0) {
    recommendations.push(
      "Consider carpooling, using public transport more often, or switching to an electric or hybrid vehicle."
    );
  }

  if (publicTransportTotal < 0.3 && (carEmissions > 0.5 || motorbikeEmissions > 0.3)) {
    recommendations.push(
      "Increase use of public transportation (bus, train, metro) instead of personal vehicles to reduce emissions."
    );
  }

  if (data.food.diet === "meat-heavy") {
    recommendations.push(
      "Reducing meat consumption, especially red meat, can significantly lower your carbon footprint. Try incorporating more plant-based meals."
    );
  }

  if (data.food.localFood === "rarely" || data.food.localFood === "sometimes") {
    recommendations.push(
      "Buying local and seasonal produce reduces transportation emissions and supports local farmers."
    );
  }

  if (secondaryEmissions > 2.0) {
    recommendations.push(
      "Consider reducing consumption of new goods. Buy second-hand, repair items, and choose sustainable products."
    );
  }

  if (data.waste.recycling === "rarely" || data.waste.recycling === "never") {
    recommendations.push(
      "Start recycling paper, plastic, glass, and metal regularly to reduce waste emissions."
    );
  }

  if (data.waste.composting === "no") {
    recommendations.push(
      "Composting organic waste reduces methane emissions from landfills and creates valuable fertilizer."
    );
  }

  if (recommendations.length < 3) {
    recommendations.push(
      "Excellent! You're making eco-conscious choices. Continue your sustainable lifestyle and inspire others."
    );
    recommendations.push(
      "Share your knowledge about carbon footprint reduction with your community to amplify your impact."
    );
  }

  return {
    total,
    breakdown: {
      house: houseTotal,
      flights: flightsTotal,
      car: carEmissions,
      motorbike: motorbikeEmissions,
      publicTransport: publicTransportTotal,
      food: foodTotal,
      secondary: secondaryEmissions,
      waste: wasteTotal,
    },
    recommendations,
  };
};
