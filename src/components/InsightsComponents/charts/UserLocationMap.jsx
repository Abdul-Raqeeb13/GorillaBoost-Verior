export default function UserLocationMap() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl w-full">
      <h2 className="text-lg mb-4">Users by Location</h2>
      <div className="w-full h-48 bg-gradient-to-br from-red-300 to-red-700 rounded-lg flex items-center justify-center">
        <span className="text-sm text-white">[Map Placeholder]</span>
      </div>
      <div className="flex gap-2 mt-4">
        {['Africa', 'United States', 'United Kingdom'].map((region, idx) => (
          <button key={idx} className="bg-gray-700 px-3 py-1 rounded text-sm">{region}</button>
        ))}
      </div>
    </div>
  );
}
