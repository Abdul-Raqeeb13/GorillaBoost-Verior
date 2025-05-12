// import React from 'react';



// function TextImgCard() {
//   return (
//     <div className="flex flex-wrap gap-4 mt-7">
//       {cardData.map((card) => (
//         <div
//           key={card.id}
//           className="bg-lightGray rounded-lg shadow overflow-hidden grow basis-full sm:basis-[48%] md:basis-[31%] lg:basis-[23%]"
//         >
//          <img
//   src={card.image}
//   alt={card.title}
//   className="w-full object-cover"
// />

//           <div className="p-4 text-white">
//             <h2 className="text-lg font-semibold">{card.title}</h2>
//             <p className="text-sm mt-3 text-paraTextColor">{card.subtitle}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from 'react';

const TextImgCard = ({ image, title, subtitle }) => {
  return (
    <div className="bg-lightGray rounded-lg shadow overflow-hidden  sm:basis-[48%] md:basis-[31%] lg:basis-[23%]">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-3 text-paraTextColor">{subtitle}</p>
      </div>
    </div>
  );
};

export default TextImgCard;


