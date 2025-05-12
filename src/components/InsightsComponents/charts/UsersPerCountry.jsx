const countries = [
  { name: 'US', users: 4461000, code: 'us' },
  { name: 'Australia', users: 3221900, code: 'au' },
  { name: 'India', users: 3131000, code: 'in' },
  { name: 'Canada', users: 3109701, code: 'ca' },
];

export default function UsersPerCountry() {
  const maxUsers = Math.max(...countries.map(c => c.users));

  return (
    <div className="bg-extraLightGray text-white p-6 rounded-xl h-full w-full shadow-lg">
      <h2 className="text-lg font-semibold mb-1">Users Per Country</h2>
      <p className="text-4xl font-bold mb-1">4,532</p>
      <p className="text-sm text-gray-400 mb-6">Compared to last year</p>

     {countries.map((country, idx) => {
  const widthPercent = (country.users / maxUsers) * 100;
  return (
    <div key={idx} className="mb-4 flex items-center">
      {/* Country flag and name */}
      <div className="flex items-center gap-2 w-24">
        <img
          src={`https://flagcdn.com/24x18/${country.code}.png`}
          alt={`${country.name} flag`}
          className="w-4 h-3 object-cover rounded-sm"
        />
        <span className="text-sm">{country.name}</span>
      </div>

      {/* Progress Bar with user count */}
      <div className="flex-1">
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${widthPercent}%` }}
          ></div>
        </div>
      </div>

      {/* User count */}
      <span className="ml-2 text-sm text-gray-300">{country.users.toLocaleString()}</span>
    </div>
  );
})}

    </div>
  );
}
