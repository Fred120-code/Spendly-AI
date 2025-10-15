export default function StatsSection({ stats }: { stats: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16 w-full max-w-6xl px-4 mt-20">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col items-center mt-6">
          <h3 className="text-[#CEEA63] text-2xl font-bold">{stat.number}</h3>
          <p className="text-white text-xl font-semibold">
            {stat.descriptioin}
          </p>
        </div>
      ))}
    </div>
  );
}
