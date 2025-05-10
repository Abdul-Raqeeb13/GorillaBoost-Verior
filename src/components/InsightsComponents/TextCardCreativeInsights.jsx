import React from 'react';

const InfoBox = () => {
  return (
    <div className="bg-lightGray rounded-xl shadow-md w-full p-5 mx-auto">
      <h2 className="text-2xl font-bold text-white my-5">Maximize Ad Performance with Data-Driven Insights</h2>
      <p className="text-white text-sm my-6">
       Unlock the true potential of your ads with advanced analytics. Creative Insights AI deciphers performance metrics, generating extensive data points for every creative. By harnessing this wealth of data, our AI delivers a cutting-edge dashboard, offering unmatched clarity on what truly connects with your audience.
      </p>

      <ul className="space-y-3">
        <li className="flex gap-3">
          <img src="/assets/TickLogo.svg" alt="Icon 1"  />
          <p className="text-white text-sm">Discover the creative elements that drive the best results.</p>
        </li>
        <li className="flex gap-3">
          <img src="/assets/TickLogo.svg" alt="Icon 2" className="" />
          <p className="text-white text-sm">Analyze ad fatigue trends to optimize costs.</p>
        </li>
        <li className="flex gap-3">
          <img src="/assets/TickLogo.svg" alt="Icon 3" className="" />
          <p className="text-white text-sm">Pinpoint top-performing creatives and refine underperforming ones.</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoBox;
