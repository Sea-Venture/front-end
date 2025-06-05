import React, { useState } from "react";
import { createLocation } from "../../../utils/apiService";
import { FaMapMarkerAlt, FaImage, FaGlobe, FaPlusCircle } from "react-icons/fa";

const LocationsManager = () => {
  const [form, setForm] = useState({
    name: "",
    lat: "",
    lng: "",
    pic: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await createLocation({
        name: form.name,
        lat: parseFloat(form.lat),
        lng: parseFloat(form.lng),
        pic: form.pic
      });
      setMessage("✅ Location created successfully!");
      setForm({ name: "", lat: "", lng: "", pic: "" });
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
            "❌ Failed to create location.")
      } else {
        setMessage("❌ Failed to create location.");
      }
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 3500);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md mx-auto transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" /> Manage Locations
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-3 text-blue-400 dark:text-blue-300" />
          <input
            type="text"
            name="name"
            placeholder="Location Name"
            value={form.name}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
          />
        </div>
        <div className="relative">
          <FaGlobe className="absolute left-3 top-3 text-green-500 dark:text-green-300" />
          <input
            type="number"
            step="any"
            name="lat"
            placeholder="Latitude"
            value={form.lat}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 outline-none transition"
            required
          />
        </div>
        <div className="relative">
          <FaGlobe className="absolute left-3 top-3 text-yellow-500 dark:text-yellow-300" />
          <input
            type="number"
            step="any"
            name="lng"
            placeholder="Longitude"
            value={form.lng}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
            required
          />
        </div>
        <div className="relative">
          <FaImage className="absolute left-3 top-3 text-purple-500 dark:text-purple-300" />
          <input
            type="text"
            name="pic"
            placeholder="Picture filename (e.g. galle.png)"
            value={form.pic}
            onChange={handleChange}
            className="w-full pl-10 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700 transition font-semibold text-lg shadow"
        >
          <FaPlusCircle />
          {loading ? "Creating..." : "Create Location"}
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
}

export default LocationsManager;