import React from 'react';

function InspirationBankMainContent() {
  const images = [
    '../assets/cardAvatar.png',
    '../assets/cardAvatar.png',
    '../assets/cardAvatar.png',
    '../assets/cardAvatar.png',
    '../assets/cardAvatar.png',
    '../assets/cardAvatar.png',
      ];

  return (
    <div className=" space-y-6">

      {/* Filter Options Card */}
      <div className="bg-commonBgColor rounded-lg shadow-md mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Country */}
          <div>
            {/* <label className="block text-black mb-1">Country</label> */}
            <select className="w-full p-2 rounded bg-extraLightGray text-white">
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="india">India</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            {/* <label className="block text-black mb-1">Industry</label> */}
            <select className="w-full p-2 rounded bg-extraLightGray text-white">
              <option value="">Select Industry</option>
              <option value="tech">Tech</option>
              <option value="fashion">Fashion</option>
              <option value="health">Healthcare</option>
            </select>
          </div>

          {/* Platform */}
          <div>
            {/* <label className="block text-black mb-1">Platform</label> */}
            <select className="w-full p-2 rounded bg-extraLightGray text-white">
              <option value="">Select Platform</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
            </select>
          </div>

          {/* Types */}
          <div>
            {/* <label className="block text-black mb-1">Types</label> */}
            <select className="w-full p-2 rounded bg-extraLightGray text-white">
              <option value="">Select Type</option>
              <option value="banner">Banner</option>
              <option value="video">Video</option>
              <option value="carousel">Carousel</option>
            </select>
          </div>
        </div>
      </div>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="rounded ">
            <img src={img} alt={`Ad ${index + 1}`} className="w-full  object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InspirationBankMainContent;
