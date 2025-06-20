import { useState } from 'react';
import laptop from '../assets/laptop.jpg';
import analysis from '../assets/analysis.jpg';
import service from '../assets/service.jpg';

const tabs = [
  {
    label: "Custom storefront",
    key: "storefront",
    description:
      "Create a custom storefront to showcase your products uniquely and professionally to global B2B buyers.",
    image: laptop,
  },
  {
    label: "Advertising tools",
    key: "ads",
    description:
      "Boost visibility with tailored advertising tools to reach your ideal buyers efficiently.",
    image: laptop,
  },
  {
    label: "Data and analytics",
    key: "analytics",
    description:
      "Optimize your every move with in-depth data and customer insights. Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!",
    image: analysis,
  },
  {
    label: "Customers support",
    key: "support",
    description:
      "Provide top-tier customer support and manage interactions across platforms seamlessly.",
    image: service,
  },
];

export default function InsightTabs() {
  const [activeTab, setActiveTab] = useState("analytics");
  const activeData = tabs.find((tab) => tab.key === activeTab);

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Tab Sidebar */}
        <aside className="md:w-1/4 w-full border-l-2 border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer py-3 pl-6 font-medium text-base sm:text-lg transition-all duration-200
                ${
                  activeTab === tab.key
                    ? "border-l-4 border-red-600 bg-red-50 text-red-700"
                    : "hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </div>
          ))}
        </aside>

        {/* Content Area */}
        <div className="md:w-3/4 w-full flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-snug">
              {activeData.label}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {activeData.description}
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={activeData.image}
              alt={activeData.label}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
