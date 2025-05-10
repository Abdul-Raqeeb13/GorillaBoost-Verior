const platforms = [
  { name: 'Facebook', visits: 12500 },
  { name: 'YouTube', visits: 10200 },
  { name: 'Instagram', visits: 8950 },
  { name: 'LinkedIn', visits: 6430 },
];

export default function SocialMediaUsage() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">Social Media Usage</h2>
        <select className="bg-gray-700 p-1 rounded text-sm">
          <option>Monthly</option>
        </select>
      </div>
      {platforms.map((platform, idx) => (
        <div key={idx} className="mb-3">
          <div className="flex justify-between text-sm">
            <span>{platform.name}</span>
            <span>{platform.visits.toLocaleString()} visits</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-red-500 rounded-full" style={{ width: `${(platform.visits / 12500) * 100}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
