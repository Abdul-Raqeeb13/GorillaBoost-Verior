import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Male', value: 75 },
  { name: 'Female', value: 25 },
];
const COLORS = ['#ef4444', '#3b82f6'];

export default function GenderDistribution() {
  return (
    <div className="bg-lightGray text-center text-white p-4 rounded-xl w-full">

      <div className="flex justify-center">
  <PieChart width={200} height={150}>
    <Pie
      data={data}
      cx="50%"
      cy="80%"
      innerRadius={50}
      outerRadius={70}
      dataKey="value"
      startAngle={180}
      endAngle={0}
    >
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
</div>

            <h2 className="text-lg mb-4">Gender</h2>
      <div className="flex justify-around text-sm mt-2">
        <span className="text-blue-500">Male</span>
        <span className="text-red-500">Female</span>
      </div>
    </div>
  );
}
