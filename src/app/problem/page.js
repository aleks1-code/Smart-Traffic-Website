export default function ProblemPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Problem We Solve</h1>

      <div className="max-w-3xl text-center text-gray-700 space-y-6">
        <p>
          Brisbane faces growing challenges around road congestion, inefficient parking, and outdated monitoring infrastructure. As of early 2025, Queensland recorded one of its deadliest starts to the year, with <strong>14 road fatalities</strong> in just the first three weeks—marking the worst opening to a year since 2020.
        </p>

        <p>
          According to <a href="https://www.couriermail.com.au/news/queensland/transurban-reveals-which-days-brisbane-drivers-are-more-likely-to-crash-on-the-citys-toll-roads/news-story/cdedc9bd9ea9d5db2e68b8fa730728e3" className="text-blue-600 underline" target="_blank">Transurban data</a>, <strong>Tuesdays and Thursdays</strong> are the most crash-prone days in Brisbane. Rear-end collisions dominate, frequently caused by stop-start traffic and last-minute braking near parking zones.
        </p>

        <p>
          These incidents aren&apos;t just physical. <a href="https://australianrotaryhealth.org.au/research/the-psychological-impact-of-road-traffic-injuries/" className="text-blue-600 underline" target="_blank">Psychological studies</a> show that up to <strong>42% of people</strong> involved in road crashes suffer ongoing mental distress—ranging from anxiety to post-traumatic stress disorder.
        </p>

        <p>
          At the core of these problems is inefficient parking. Drivers circling for spots increase congestion, emissions, and risk of crashes—all while wasting time and fuel. Traditional camera-based smart parking systems are expensive, intrusive, and often unsuitable for widespread use.
        </p>

        <p>
          <strong>SensorFlow</strong> delivers an alternative: a <strong>low-cost, privacy-safe smart parking sensor</strong> using BLE-connected modules to detect vehicle presence in real-time. Our solution helps reduce congestion, improve road safety, and contribute to more intelligent, data-driven transport systems.
        </p>
      </div>
    </main>
  );
}
