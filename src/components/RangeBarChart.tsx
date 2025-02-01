import React from "react";
import ReactSlider from "react-slider";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

interface Props {
  data: { name: string; goal: number }[]; 
  setRange: (range: [number, number]) => void; 
  range: [number, number]; 
}

const RangeBarChart: React.FC<Props> = ({ data, setRange, range }) => {
  return (
    <div className="relative flex flex-col h-[10rem]">
      <div className="absolute w-full bottom-[3.37rem] rounded-2xl">
        <ReactSlider
          className="horizontal-slider rounded-2xl"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          min={0}
          max={300}
          value={range}
          onChange={setRange}
          pearling 
          minDistance={10}
        />
      </div>

      <div className="w-full h-64"> 
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} className="h-[10rem]">
            <Bar className="h-[10rem]"
              dataKey="goal"
              fill="hsl(var(--foreground))"
              opacity={0.2} 
              shape={(props: any) => {
                const { x, value } = props;

                const randomHeight = Math.floor(Math.random() * (50 - 25 + 1)) + 25;

                const isInRange = value >= range[0] && value <= range[1];

                const y = 100 - randomHeight; 

                return (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={randomHeight}
                    rx={5}
                    ry={5} 
                    fill={isInRange ? "#7C7AB6" : "hsl(var(--foreground))"} 
                    opacity={isInRange ? 0.9 : 0.2}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RangeBarChart;