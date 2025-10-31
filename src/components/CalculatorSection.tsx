import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileSpreadsheet, FileText } from "lucide-react";
import { CalculatorForm } from "./calculator/CalculatorForm";
import { ExcelUpload } from "./calculator/ExcelUpload";

export const CalculatorSection = () => {
  return (
    <section id="calculator" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Calculate Your Carbon Footprint
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your preferred method to get started
          </p>
        </div>

        <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-xl">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="form" className="text-base">
                <FileText className="w-4 h-4 mr-2" />
                Fill Out Form
              </TabsTrigger>
              <TabsTrigger value="excel" className="text-base">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Upload Excel
              </TabsTrigger>
            </TabsList>

            <TabsContent value="form">
              <CalculatorForm />
            </TabsContent>

            <TabsContent value="excel">
              <ExcelUpload />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
