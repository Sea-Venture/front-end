import React, { useEffect, useState } from 'react';
import ProfileTitle from '../../atom/dashboard/profile/profileTitle';
import PictureContainer from '../../molecule/profile/pictureContainer';
import Role from '../../atom/dashboard/profile/role';
import UserName from '../../atom/dashboard/profile/userName';
import { fetchUserByEmail, fetchAllBeaches } from '../../../utils/apiService'; 
import GuideButton from '../../molecule/profile/guideButton';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [beaches, setBeaches] = useState<any[]>([]); // State to store the list of beaches

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem("email");
        if (!email) {
          throw new Error("Email not found in localStorage");
        }
        const data = await fetchUserByEmail(email);
        console.log("User data fetched:", data);
        setUserData(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch user data. Please try again later.");
      }
    };

    const fetchBeachesData = async () => {
      try {
        const beachesData = await fetchAllBeaches();
        console.log("Beaches fetched:", beachesData);
        setBeaches(beachesData); // Set the fetched beaches in state
      } catch (error) {
        console.error("Failed to fetch beaches:", error);
      }
    };

    fetchUserData();
    fetchBeachesData(); // Fetch beaches when the component mounts
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!userData) {
    return <p>Loading...</p>;
  }

  const onClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <ProfileTitle title="User Profile" />
      <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <PictureContainer
          imageUrl={userData.profilePicture || "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"}
          onImageChange={(file: File | null) => {
            console.log("Image changed:", file);
          }}
        />
        <UserName userName={userData.userName} />
        <Role role={userData.role} />
        <GuideButton buttonText="Become a Guide" onClick={onClick} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Guide Registration</h2>
            <p className="mb-6 text-gray-300 text-center">
              Fill out the form below to become a guide. Ensure all fields are completed.
            </p>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">Licence Card Front Side</label>
                <input
                  type="file"
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">Licence Card Back Side</label>
                <input
                  type="file"
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">NIC Photo</label>
                <input
                  type="file"
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Area"
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="Select Beach"
              >
                <option disabled>Select Beach</option>
                {beaches.map((beach) => (
                  <option key={beach.beach_id} value={beach.beach_id}>
                    {beach.beach_name}
                  </option>
                ))}
              </select>
            </form>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;