import React from "react";

type Feature = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function FeatureCard({ item }: { item: Feature }) {
  const Icon = item.icon;
  return (
    <div className="bg-white border-2 border-[#DAF866] gap-6 m-6 p-6 w-full h-full flex flex-col items-center lg:items-start text-center rounded-xl shadow-md">
      <div className="w-20 h-20 bg-[#dbf575c0] flex items-center justify-center rounded-lg mb-4">
        <Icon className="text-[#819C22] w-10 h-9 stroke-[1.5]" />
      </div>
      <div className="flex flex-col sm:items-center lg:items-start gap-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h2>
        <p className="text-sm text-gray-600 text-center lg:text-start">
          {item.description}
        </p>
      </div>
    </div>
  );
}
