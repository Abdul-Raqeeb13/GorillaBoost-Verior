import React from 'react';

const features = [
    {
        title: "Website Traffic Overview",
        text: "Total visits and key metrics."
    },
    {
        title: "Demographic Breakdown:",
        text: "Age and gender insights."
    },
    {
        title: "Top Pages & Subdomains",
        text: "High-performing sections revealed."
    },
    {
        title: "Social Media Engagement",
        text: "Most-used platforms analyzes."
    },
    {
        title: "Traffic Sources",
        text: "Origins of paid and organic visitors."
    },
    {
        title: "Geographic Distribution",
        text: "Leading traffic regions and countries."
    }
];

const InfoBox = () => {
    return (
        <div className="bg-lightGray rounded-xl shadow-md w-full p-5 mx-auto">
            <h2 className="text-28 font-semibold text-white">
                Decode Competitor Moves and Stay Ahead!
            </h2>
            <p className="text-white text-18 font-normal my-7 mt-3">
                Discover the strategies fueling your competitors' success. Our Competitor Insights tool uncovers key data on traffic sources, customer acquisition tactics, audience demographics, and more. Leverage these insights to refine your strategy, drive innovation, and stay ahead of the competition.      </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <img src="/assets/TickLogo.svg" alt={`Tick ${index + 1}`} />
                        <p className="text-white text-14 font-normal">
                            <span className="font-medium text-14">{feature.title} : </span> {feature.text}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoBox;
