"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const mockData = [
  { name: "ubuntu", size: 45.2, color: "#FF6B6B" },
  { name: "postgres", size: 32.8, color: "#4ECDC4" },
  { name: "node", size: 28.4, color: "#45B7D1" },
  { name: "nginx", size: 22.1, color: "#96CEB4" },
  { name: "redis", size: 18.5, color: "#FFEEAD" },
];

export function RepositoryStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Repository Storage Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="size"
                label={({ name, percent }) => 
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {mockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => `${value.toFixed(1)} GB`}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}