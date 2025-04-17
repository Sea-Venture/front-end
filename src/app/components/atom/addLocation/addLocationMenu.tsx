import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

interface AddLocationMenuProps {
  onClick: () => void;
}

const AddLocationMenu: React.FC<AddLocationMenuProps> = ({ onClick }) => {
  const [name, setName] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !lat || !lng || !picture) {
      alert('Please fill in all fields.');
      return;
    }

    const payload = {
      name,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      pic: picture,
    };

    const token = localStorage.getItem('token');

    if (!token) {
      alert('You are not logged in. Please log in to continue.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://localhost:8080/locations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Failed to add location'}`);
        return;
      }

      const data = await response.json();
      alert('Location added successfully!');
      console.log('Response:', data);

      setName('');
      setLat('');
      setLng('');
      setPicture('');
      onClick();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the location.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="createProductModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Location
            </h3>
            <button
              type="button"
              onClick={onClick}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoMdClose className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter a Location Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lat"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Latitude
                </label>
                <input
                  type="text"
                  name="lat"
                  id="lat"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Latitude"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lng"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Longitude
                </label>
                <input
                  type="text"
                  name="lng"
                  id="lng"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Longitude"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="picture"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location Picture (Base64)
                </label>
                <input
                  type="text"
                  name="picture"
                  id="picture"
                  value={picture}
                  onChange={(e) => setPicture(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Base64 Encoded Picture"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Location'}
              </button>
              <button
                type="button"
                onClick={onClick}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLocationMenu;