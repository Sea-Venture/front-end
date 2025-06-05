import React from 'react';

interface Forecast {
  time: string;
  rating: string;
  height: string;
  period: string;
  speed_direction: string;
  state: string;
  weather: string;
  air_temp: string;
}

interface WeatherDay {
  date: string;
  forecast: Forecast[];
}

interface WeatherData {
  water_temp?: string;
  days?: WeatherDay[];
}

const WeatherCard = ({
  weather,
  location,
}: {
  weather: WeatherData | null;
  location: string;
}) => {
  if (!weather) return null;

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[400px] h-[500px]">
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-2 text-center">Weather for {location}</h2>
        <p className="text-slate-600 mb-4 text-center">
          Water Temp: <span className="font-bold">{weather.water_temp}</span>
        </p>
        {weather.days &&
          weather.days.map((day) => (
            <div key={day.date} className="mb-6">
              <div className="font-bold mb-2">{day.date}</div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs border-collapse">
                  <thead className="bg-slate-100 sticky top-0 z-10">
                    <tr>
                      <th className="py-2 px-2 border-b">Time</th>
                      <th className="py-2 px-2 border-b">Rating</th>
                      <th className="py-2 px-2 border-b">Height</th>
                      <th className="py-2 px-2 border-b">Period</th>
                      <th className="py-2 px-2 border-b">Wind</th>
                      <th className="py-2 px-2 border-b">State</th>
                      <th className="py-2 px-2 border-b">Weather</th>
                      <th className="py-2 px-2 border-b">Air Temp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.forecast.map((f, idx) => (
                      <tr
                        key={idx}
                        className={`transition hover:bg-blue-50 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                        }`}
                      >
                        <td className="py-1 px-2 text-center">{f.time}</td>
                        <td className="py-1 px-2 text-center">
                          <span
                            className={`inline-block w-6 rounded-full ${
                              f.rating === "3"
                                ? "bg-green-400 text-white"
                                : f.rating === "2"
                                ? "bg-yellow-400 text-white"
                                : f.rating === "1"
                                ? "bg-red-400 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {f.rating || "-"}
                          </span>
                        </td>
                        <td className="py-1 px-2 text-center">{f.height}</td>
                        <td className="py-1 px-2 text-center">{f.period}</td>
                        <td className="py-1 px-2 text-center">{f.speed_direction}</td>
                        <td className="py-1 px-2 text-center">{f.state}</td>
                        <td className="py-1 px-2 text-center">{f.weather}</td>
                        <td className="py-1 px-2 text-center">{f.air_temp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeatherCard;