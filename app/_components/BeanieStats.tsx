export default function BeanieStats() {
  const stats = [
    { number: "100k+", text: "Green Lights" },
    { number: "4K+", text: "People Postered" },
  ];

  return (
    <div className="w-[100%] bg-opacity-0 absolute bottom-0 left-0 py-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-center gap-12 md:gap-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-3xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
              {stat.number}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-md lg:text-xlmax-w-xs">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
