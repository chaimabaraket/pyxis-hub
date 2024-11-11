"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Image, Scale } from "lucide-react";
import { BarChart } from "@/components/ui/chart";

const mockData = {
  totalSize: "156.2 GB",
  imageCount: 47,
  sizeData: [
    { name: "ubuntu:latest", value: 29.4, color: "#FF6B6B" },
    { name: "postgres:13", value: 24.1, color: "#4ECDC4" },
    { name: "node:16", value: 18.7, color: "#45B7D1" },
  ],
};

export function ImageStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Storage Used</CardTitle>
          <HardDrive className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockData.totalSize}</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Images</CardTitle>
          <Image className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockData.imageCount}</div>
        </CardContent>
      </Card>
      <Card className="col-span-full bg-gradient-to-br from-purple-500/5 to-pink-500/5">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Largest Images</CardTitle>
          <Scale className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent className="pt-4">
          <BarChart
            data={mockData.sizeData}
            index="name"
            categories={["value"]}
            colors={["#FF6B6B", "#4ECDC4", "#45B7D1"]}
            valueFormatter={(value) => `${value}GB`}
          />
        </CardContent>
      </Card>
    </div>
  );
}