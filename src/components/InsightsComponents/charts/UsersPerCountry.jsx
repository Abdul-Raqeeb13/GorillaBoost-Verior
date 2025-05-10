const countries = [
  { name: 'United States', users: 4461000 },
  { name: 'Australia', users: 3221900 },
  { name: 'India', users: 3131000 },
  { name: 'Canada', users: 3109701 },
];

export default function UsersPerCountry() {
  const maxUsers = Math.max(...countries.map(c => c.users));
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl w-full">
      <h2 className="text-lg mb-2">Users Per Country</h2>
      <p className="text-3xl font-bold">4,532</p>
      <p className="text-sm mb-4 text-gray-400">Compared to last year</p>
      {countries.map((country, idx) => (
        <div key={idx} className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>{country.name}</span>
            <span>{country.users.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${(country.users / maxUsers) * 100}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
