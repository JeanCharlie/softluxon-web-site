import { milestones } from "@/consts/milestones";

export const History = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center text-[#085078] mb-12">
        Nuestra Historia
      </h2>
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="md:w-1/4">
              <div className="text-3xl font-bold text-[#85d8ce]">
                {milestone.year}
              </div>
            </div>
            <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#085078] mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-700">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
