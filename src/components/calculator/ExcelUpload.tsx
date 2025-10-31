import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Download, FileSpreadsheet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ExcelUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith(".xlsx") || selectedFile.name.endsWith(".xls")) {
        setFile(selectedFile);
        toast({
          title: "File uploaded",
          description: `${selectedFile.name} ready to process`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an Excel file (.xlsx or .xls)",
          variant: "destructive",
        });
      }
    }
  };

  const handleDownloadTemplate = () => {
    toast({
      title: "Template download",
      description: "Excel template download feature coming soon",
    });
  };

  const handleCalculate = () => {
    if (file) {
      toast({
        title: "Processing",
        description: "Excel processing feature coming soon",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-primary/10">
            <FileSpreadsheet className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Upload Excel Sheet</h3>
        <p className="text-muted-foreground">
          Download our template, fill it with your data, and upload it for instant calculation
        </p>
      </div>

      <Card className="p-8 border-2 border-dashed border-border hover:border-primary/50 transition-colors">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Upload className="w-12 h-12 text-muted-foreground" />
          </div>
          
          <div>
            <input
              type="file"
              id="excel-upload"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="excel-upload">
              <Button asChild variant="outline" className="cursor-pointer">
                <span>Choose Excel File</span>
              </Button>
            </label>
          </div>

          {file && (
            <p className="text-sm text-foreground font-medium">
              Selected: {file.name}
            </p>
          )}

          <p className="text-sm text-muted-foreground">
            Supports .xlsx and .xls formats
          </p>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={handleDownloadTemplate}
          variant="outline"
          className="flex-1"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Template
        </Button>
        
        <Button
          onClick={handleCalculate}
          disabled={!file}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          Calculate from Excel
        </Button>
      </div>

      <Card className="p-4 bg-muted/50">
        <h4 className="font-semibold mb-2 text-sm">Template Instructions:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Fill in all required fields in the template</li>
          <li>• Use the dropdown values provided in the template</li>
          <li>• Enter numeric values for miles, bills, and counts</li>
          <li>• Save and upload the completed file</li>
        </ul>
      </Card>
    </div>
  );
};
