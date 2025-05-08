import React from 'react';
import BelowHeader from '../BelowHeader';

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
    <div className="w-full bg-customBlue rounded-lg shadow-md overflow-hidden">
      <BelowHeader
        title="Best Performing Ads"
        subtitle="Top-Performing Ads by Engagement & ROI."
        icon=""
        btnName="Filter"
        color="bg-customBlue"
        px="px-5"
        py="py-3"
      />
      {/* Wrapping the table with a container that adjusts without overflow */}
      <div className="w-full max-w-full">
        <table className="w-full table-auto text-xs"> {/* Small text size */}
        <thead className="bg-customBlue text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Ads</th>
              <th className="py-3 px-6 text-left">Impressions</th>
              <th className="py-3 px-6 text-left">Clicks</th>
              <th className="py-3 px-6 text-left">CTR</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            {data.map((ad) => (
              <tr key={ad.id} className="even:bg-customBlue odd:bg-tableRowColor">
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
