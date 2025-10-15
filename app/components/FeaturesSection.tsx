import FeatureCard from "./FeatureCard";

export default function FeaturesSection({ features }: { features: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16 w-full max-w-6xl px-4 mt-6">
      {features.map((item) => (
        <FeatureCard key={item.id} item={item} />
      ))}
    </div>
  );
}
