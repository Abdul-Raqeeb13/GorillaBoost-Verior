import UsersPerCountry from './UsersPerCountry';
import { useNavigate } from "react-router-dom";

export default function UserLocationMap() {
  const regions = ['Africa', 'United States', 'United Kingdom'];
const navigate = useNavigate();
  return (
    <div className="bg-lightGray mt-5 text-white p-6 rounded-xl w-full flex flex-col lg:flex-row gap-6 shadow-lg">
      
      {/* Left side: Map and Tabs */}
      <div className="w-full lg:w-5/6 flex flex-col justify-between">
        
        {/* Region Tabs */}
        <div className="flex gap-2 mb-4">
          {regions.map((region, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                idx === 0 ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-72 rounded-xl flex items-center justify-center">
          {/* <span className="text-sm font-semibold">[Map Placeholder]</span> */}
          <img src="../assets/map.png" alt="" srcset="" onClick={() =>  navigate("/insights/inspirationbank")} />
        </div>
      </div>

      {/* Right side: Users per Country Panel */}
      <div className="w-full lg:w-2/3">
        <UsersPerCountry />
      </div>
    </div>
  );
}
