const ageGroups = [
  { age: '16–24', value: 60 },
  { age: '25–34', value: 90 },
  { age: '35–44', value: 50 },
  { age: '45–54', value: 40 },
  { age: '55+', value: 75 },
];

export default function AgeDistribution() {
  return (
    <div className="bg-lightGray text-white p-4 rounded-xl w-full">
      <h2 className="text-lg mt-4">Age</h2>
      <h2 className="text-sm mb-4">Based On User Feedback</h2>
      {ageGroups.map((group, idx) => (
        <div key={idx} className="mb-2 flex items-center gap-2">
  <span className="w-12 text-sm">{group.age}</span>
  <div className="flex-1 h-3 bg-extraLightGray rounded-full">
    <div
      className="h-3 bg-red-500 rounded-full"
      style={{ width: `${group.value}%` }}
    ></div>
  </div>
</div>

      ))}
    </div>
  );
}
