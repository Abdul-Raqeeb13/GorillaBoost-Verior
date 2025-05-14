import React from 'react';
import { useNavigate } from 'react-router-dom'

const cardData = [
  { id: 1, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/generate/mva',  image: './assets/generateCardImage.png' },
  { id: 2, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/generate/hipp', image: './assets/generateCardImage.png' },
  { id: 3, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/mva', image: './assets/generateCardImage.png' },
  { id: 4, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/mva', image: './assets/generateCardImage.png' },
  { id: 5, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/mva', image: './assets/generateCardImage.png' },
  { id: 6, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/mva', image: './assets/generateCardImage.png' },
  { id: 7, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/mva', image: './assets/generateCardImage.png' },
  { id: 8, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', route: '/mva', image: './assets/generateCardImage.png' },
];

function Cards() {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
      {cardData.map(card => (
        <div
           key={card.id}
          onClick={() => navigate(card.route)}
          className="bg-lightGray rounded-lg shadow overflow-hidden"
        >
          <img src={card.image} alt={card.title} className="w-full h-50 object-cover" />
          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold text-20">{card.title}</h2>
            <p className="text-14 font-medium mt-1 text-paraTextColor">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
