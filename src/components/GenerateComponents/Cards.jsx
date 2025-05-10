import React from 'react';

const cardData = [
  { id: 1, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 2, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 3, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 4, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 5, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 6, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 7, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
  { id: 8, title: 'Photo Ads', subtitle: 'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text ', image: './assets/generateCardImage.png' },
];

function Cards() {
  return (
    <div className="flex flex-wrap justify-between mt-7 gap-4">
      {cardData.map(card => (
        <div
          key={card.id}
          className="bg-lightGray rounded-lg shadow overflow-hidden w-full sm:w-[48%] md:w-[31%] lg:w-[23%]"
        >
          <img src={card.image} alt={card.title} className="w-full h-50 object-cover" />
          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm mt-3 text-paraTextColor">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
