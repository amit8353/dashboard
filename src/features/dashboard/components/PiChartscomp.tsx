import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];
const totalSum = data.reduce((sum, entry) => sum + entry.total, 0);

export function PiChartComponents({ size = 'small' }) {
  // Adjust pie size based on the 'size' prop
  let innerRadius, outerRadius, fontSize;
  if (size === 'small') {
    innerRadius = 40;  // Smaller inner radius
    outerRadius = 80;  // Smaller outer radius
    fontSize = '16px';  // Smaller font size
  } else if (size === 'large') {
    innerRadius = 80;  // Larger inner radius
    outerRadius = 120; // Larger outer radius
    fontSize = '24px';  // Larger font size
  } else {
    innerRadius = 60;  // Default inner radius
    outerRadius = 100; // Default outer radius
    fontSize = '18px';  // Default font size
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="total"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize, fill: '#333' }}
        >
          ${totalSum}
        </text>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
