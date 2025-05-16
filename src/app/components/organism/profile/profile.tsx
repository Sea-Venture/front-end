import React, { use, useEffect, useState } from 'react';
import ProfileTitle from '../../atom/dashboard/profile/profileTitle';
import PictureContainer from '../../molecule/profile/pictureContainer';
import Role from '../../atom/dashboard/profile/role';
import UserName from '../../atom/dashboard/profile/userName';
import { fetchUserByEmail, fetchAllBeaches, createGuide, updateUserRole, fetchUserIdByEmail } from '../../../utils/apiService'; 
import GuideButton from '../../molecule/profile/guideButton';
import { userAgent } from 'next/server';

type FormDataType = {
  f_name: string;
  l_name: string;
  licence_front: string;
  licence_back: string;
  area: string;
  nic_photo: string;     
  phone_number: string;
  beach_id: number;
};

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [beaches, setBeaches] = useState<any[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    f_name: '',
    l_name: '',
    licence_front: '',
    licence_back: '',
    nic_photo: '',
    area: '',
    phone_number: '',
    beach_id: 0,
  });

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
        setBeaches(beachesData);
      } catch (error) {
        console.error("Failed to fetch beaches:", error);
      }
    };

    fetchUserData();
    fetchBeachesData();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const folderPath = "/guidedetails/";
      const fileName = `${formData.f_name}-${formData.l_name}-${name}-${Date.now()}.${file.name.split('.').pop()}`;
      const filePath = `${folderPath}${fileName}`;

      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result as string;
        const link = document.createElement("a");
        link.href = base64Data;
        link.click();
      };
      reader.readAsDataURL(file);

      setFormData((prev) => ({
        ...prev,
        [name]: filePath,
      }));
    }
  };

  const sendFormData = async () => {
    try {

      console.log("Form data before sending:", formData);
      const guideData = {
        f_name: formData.f_name,
        l_name: formData.l_name,
        licence_front: formData.licence_front, // File path
        licence_back: formData.licence_back,
        area: formData.area,   // File path
        nic_photo: formData.nic_photo,         // File path
        phone_number: formData.phone_number,
        beach_id: formData.beach_id,
      };

      console.log("Guide data to be sent:", guideData);

      // Send the guide data to the backend
      const email = localStorage.getItem("email");
      if (!email) {
        throw new Error("Email is null or undefined");
      }
      const userId = await fetchUserIdByEmail(email);
      const response = await createGuide(guideData);

      const role = "guide";

      updateUserRole(userId.user_id, role);
      console.log("Guide created successfully:", response);
      alert("Guide created successfully! Please log in again to update your role.");
      closeModal();

      // // Redirect to the login page
      window.location.href = "/api/login";
    } catch (error) {
      console.error("Failed to create guide:", error);
    }
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
                name="f_name"
                placeholder="First Name"
                value={formData.f_name}
                onChange={handleInputChange}
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="l_name"
                placeholder="Last Name"
                value={formData.l_name}
                onChange={handleInputChange}
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">Licence Card Front Side</label>
                <input
                  type="file"
                  name="licence_front"
                  onChange={handleFileChange}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">Licence Card Back Side</label>
                <input
                  type="file"
                  name="licence_back"
                  onChange={handleFileChange}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-400 mb-2">NIC Photo</label>
                <input
                  type="file"
                  name="nic_photo"
                  onChange={handleFileChange}
                  className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <input
                type="text"
                name="area"
                placeholder="Area"
                value={formData.area}
                onChange={handleInputChange}
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone_number"
                placeholder="Contact Number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="beach_id"
                value={formData.beach_id}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    beach_id: parseInt(e.target.value, 10), // Convert the value to an integer
                  }))
                }
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select Beach</option>
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
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
                onClick={sendFormData}
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