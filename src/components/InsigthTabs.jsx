import { useState } from 'react';

const tabs = [
  {
    label: "Custom storefront",
    key: "storefront",
    description:
      "Create a custom storefront to showcase your products uniquely and professionally to global B2B buyers.",
    image: "/images/storefront.png", // replace with actual image path
  },
  {
    label: "Advertising tools",
    key: "ads",
    description:
      "Boost visibility with tailored advertising tools to reach your ideal buyers efficiently.",
    image: "/images/ads.png", // replace with actual image path
  },
  {
    label: "Data and analytics",
    key: "analytics",
    description:
      "Optimize your every move with in-depth data and customer insights. Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!",
    image: "/images/analytics.png", // replace with actual image path
  },
  {
    label: "Customers support",
    key: "support",
    description:
      "Provide top-tier customer support and manage interactions across platforms seamlessly.",
    image: "/images/support.png", // replace with actual image path
  },
];

export default function InsightTabs() {
  const [activeTab, setActiveTab] = useState("analytics");
  const activeData = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-16 px-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 border-l-2 border-gray-200 relative">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`cursor-pointer py-3 pl-6 font-semibold text-lg transition-all duration-200 ${
              activeTab === tab.key
                ? " border-l-4 border-red-600 "
                : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 md:pl-12 mt-8 md:mt-0 flex flex-col lg:flex-row items-start lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
            Optimize your every move with in-depth data and customer insights
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {activeData.description}
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10">
          <img
            src={activeData.image}
            alt={activeData.label}
            className="max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
