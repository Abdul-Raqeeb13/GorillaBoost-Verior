import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Organic Search', value: 51 },
  { name: 'Paid Ads', value: 24 },
  { name: 'Direct', value: 15 },
  { name: 'Referral', value: 10 },
];

const COLORS = ['#22c55e', '#f59e0b', '#3b82f6', '#f87171'];

export default function AcquisitionSources() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl w-full">
      <h2 className="text-lg mb-4">Acquisition Sources</h2>
      <PieChart width={220} height={220}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="text-sm mt-2 space-y-1">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{item.name}:</span>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
