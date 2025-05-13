
import { useState } from "react";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell 
} from "recharts";
import { ZoomIn, ZoomOut, ChartLine, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BaseCard } from "./base-card";
import { cn } from "@/lib/utils";

type ChartType = "line" | "bar" | "area" | "pie";

interface ChartCardProps {
  title?: string;
  description?: string;
  interpretation?: string;
  data: any[];
  type?: ChartType;
  xKey: string;
  yKeys: { key: string; name: string; color: string }[];
  className?: string;
}

export function ChartCard({
  title,
  description,
  interpretation,
  data,
  type = "line",
  xKey,
  yKeys,
  className,
}: ChartCardProps) {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 20, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 20, 60));
  };

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yKeys.map((y) => (
              <Line
                key={y.key}
                type="monotone"
                dataKey={y.key}
                name={y.name}
                stroke={y.color}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        );
      case "bar":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yKeys.map((y) => (
              <Bar key={y.key} dataKey={y.key} name={y.name} fill={y.color} />
            ))}
          </BarChart>
        );
      case "area":
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yKeys.map((y) => (
              <Area
                key={y.key}
                type="monotone"
                dataKey={y.key}
                name={y.name}
                fill={y.color}
                stroke={y.color}
              />
            ))}
          </AreaChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              nameKey={xKey}
              dataKey={yKeys[0].key}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={yKeys[index % yKeys.length].color}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
    }
  };

  return (
    <BaseCard
      title={title}
      description={description}
      className={cn("bg-card", className)}
    >
      <div className="flex justify-end gap-2 mb-2">
        {type === "line" ? (
          <ChartLine className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChartBar className="h-4 w-4 text-muted-foreground" />
        )}
        <Button size="icon" variant="outline" onClick={handleZoomIn} className="h-7 w-7">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" onClick={handleZoomOut} className="h-7 w-7">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>
      <div style={{ height: `${zoom * 2}px`, maxHeight: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
      {interpretation && (
        <div className="mt-4 text-sm border-t pt-3 text-muted-foreground">
          <strong>Interpretation:</strong> {interpretation}
        </div>
      )}
    </BaseCard>
  );
}
