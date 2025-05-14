import React from 'react';
import BelowHeader from '../BelowHeader';
import { SlCalender } from "react-icons/sl";


function Table1() {
  const data = [
    {
      id: 1,
      adName: 'Perfume Ad',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s',
      impressions: 100,
      clicks: 10,
      ctr: '2.5%',
      status: 'Active',
    },
    {
      id: 2,
      adName: 'Shoe Ad',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s',
      impressions: 250,
      clicks: 30,
      ctr: '4.8%',
      status: 'Inactive',
    },
    {
      id: 2,
      adName: 'Shoe Ad',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s',
      impressions: 250,
      clicks: 30,
      ctr: '4.8%',
      status: 'Inactive',
    },
  ];

  return (
    <div className="w-full bg-lightGray p-3 rounded-lg overflow-hidden">
        <BelowHeader
  title="Best Performing ADs"
  subtitle="Top-Performing Ads by Engagement & ROI"
  btnName="Monthly"
  icon={<SlCalender />}
  options={[
    { label: "Yearly", value: "yearly" },
    { label: "Monthly", value: "monthly" },
    { label: "Daily", value: "daily" },
  ]}
  onSelectOption={(option) => console.log("Selected:", option)}
/>


      {/* Wrapping the table with a container that adjusts without overflow */}
      <div className="w-full max-w-full text-center mt-5">
        <table className="w-full table-auto "> {/* Small text size */}
        <thead className=" text-white text-16 font-bold leading-normal">
            <tr>
              <th className="py-5 px-6 text-left">Ads</th>
              <th className="py-5 px-6 text-left">Impressions</th>
              <th className="py-5 px-6 text-left">Clicks</th>
              <th className="py-5 px-6 text-left">CTR</th>
              <th className="py-5 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((ad) => (
              <tr key={ad.id} className="even:bg-extraLightGray odd:bg-lightGray font-medium text-16">
                <td className="p-2 flex items-center gap-2">
                  <img src={ad.imgUrl} alt={ad.adName} className="w-8 h-8 rounded-lg border-b border-blue-gray-50" />
                  {ad.adName}
                </td>
                <td className="p-2">{ad.impressions}</td>
                <td className="p-2">{ad.clicks}</td>
                <td className="p-2">{ad.ctr}</td>
                <td className="p-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      ad.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {ad.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table1;
