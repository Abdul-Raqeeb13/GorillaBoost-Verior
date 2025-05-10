import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'Creative Insights',
    subtitle:
      'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
    image: './assets/generateCardImage.png',
  },
  {
    id: 2,
    title: 'Competitor Insights',
    subtitle:
      'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
    image: './assets/generateCardImage.png',
  },
  {
    id: 3,
    title: 'Inspiration Bank',
    subtitle:
      'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
    image: './assets/generateCardImage.png',
  },
  {
    id: 3,
    title: 'Inspiration Bank',
    subtitle:
      'Lorem ipssum Dummy text Will Here For Sample Lorems ipsum Lorem ipssum Dummy text Will Here For Sample Lorems ipsum . ',
    image: './assets/generateCardImage.png',
  },
  // Add more cards here if needed
];

function TextImgCard() {
  return (
    <div className="flex flex-wrap gap-4 mt-7">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-lightGray rounded-lg shadow overflow-hidden grow basis-full sm:basis-[48%] md:basis-[31%] lg:basis-[23%]"
        >
         <img
  src={card.image}
  alt={card.title}
  className="w-full object-cover"
/>

          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm mt-3 text-paraTextColor">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TextImgCard;
