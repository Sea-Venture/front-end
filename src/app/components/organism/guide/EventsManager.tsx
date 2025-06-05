import React, { useEffect, useState } from "react";
import { fetchLocations, fetchActivities, createEvent } from "../../../utils/apiService";
import { FaCalendarPlus, FaMapMarkerAlt, FaListUl, FaAlignLeft } from "react-icons/fa";

const EventsManager = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    location_id: "",
    activity_id: "",
  });
  const [locations, setLocations] = useState<{ id: string; name: string }[]>([]);
  const [activities, setActivities] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchLocations().then(setLocations).catch(() => setLocations([]));
    fetchActivities().then(setActivities).catch(() => setActivities([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await createEvent({
        name: form.name,
        description: form.description,
        location_id: Number(form.location_id),
        activity_id: Number(form.activity_id),
      });
      setMessage("✅ Event created successfully!");
      setForm({ name: "", description: "", location_id: "", activity_id: "" });
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as { response?: unknown }).response === "object" &&
        (error as { response?: { data?: { message?: string } } }).response &&
        "data" in (error as { response?: { data?: unknown } }).response! &&
        typeof ((error as { response: { data?: unknown } }).response as { data?: unknown }).data === "object" &&
        ((error as { response: { data?: { message?: string } } }).response as { data?: { message?: string } }).data &&
        "message" in ((error as { response: { data?: { message?: string } } }).response as { data?: { message?: string } }).data!
      ) {
        setMessage(
          (((error as { response: { data: { message?: string } } }).response.data).message) ||
            "❌ Failed to create event.")
      } else {
        setMessage("❌ Failed to create event.");
      }
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 3500);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md mx-auto transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <FaCalendarPlus className="text-blue-600 dark:text-blue-400" /> Manage Events
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <FaListUl className="absolute left-3 top-3 text-blue-400 dark:text-blue-300" />
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={form.name}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
          />
        </div>
        <div className="relative">
          <FaAlignLeft className="absolute left-3 top-3 text-green-500 dark:text-green-300" />
          <textarea
            name="description"
            placeholder="Event Description"
            value={form.description}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 outline-none transition resize-none"
            rows={3}
            required
          />
        </div>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-3 text-purple-500 dark:text-purple-300" />
          <select
            name="location_id"
            value={form.location_id}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            required
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <FaListUl className="absolute left-3 top-3 text-yellow-500 dark:text-yellow-300" />
          <select
            name="activity_id"
            value={form.activity_id}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
            required
          >
            <option value="">Select Activity</option>
            {activities.map((act) => (
              <option key={act.id} value={act.id}>
                {act.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700 transition font-semibold text-lg shadow"
        >
          <FaCalendarPlus />
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
      {message && (
        <div
          className={`mt-6 text-center text-base font-medium rounded p-2 transition
            ${message.startsWith("✅")
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default EventsManager;