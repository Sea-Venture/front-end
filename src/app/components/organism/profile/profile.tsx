import React, { useEffect, useState } from 'react';
import ProfileTitle from '../../atom/dashboard/profile/profileTitle';
import PictureContainer from '../../molecule/profile/pictureContainer';
import Role from '../../atom/dashboard/profile/role';
import UserName from '../../atom/dashboard/profile/userName';
import { fetchUserByEmail, fetchAllBeaches, createGuide, updateUserRole, fetchUserIdByEmail, fetchUserEmailByToken } from '../../../utils/apiService'; 
import GuideButton from '../../molecule/profile/guideButton';

// Change FormDataType
type FormDataType = {
  f_name: string;
  l_name: string;
  licence_front: string;
  licence_back: string;
  area: string;
  nic_photo: string;     
  phone_number: string;
  beach_id: string | number; // allow empty string
};

interface UserData {
  ID?: number;
  CreatedAt?: string;
  userName?: string;
  email?: string;
  role?: string;
  profilePic?: string;
}

interface Beach {
  ID: number;
  beach_name: string;
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [beaches, setBeaches] = useState<Beach[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    f_name: '',
    l_name: '',
    licence_front: '',
    licence_back: '',
    nic_photo: '',
    area: '',
    phone_number: '',
    beach_id: '', // set to empty string initiall
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const emailResult = await fetchUserEmailByToken(token);

        if (!emailResult) {
          throw new Error("Failed to fetch email from token");
        }


        const email = emailResult.email;
        if (typeof email !== 'string') {
          throw new Error("Email is not a string");
        }
        localStorage.setItem('email', email);

        const user = await fetchUserByEmail(email);
        if (!user) {
          throw new Error("Failed to fetch user data");
        }

        setUserData(user);

        setError(null);
      } catch {
        setError("Failed to fetch user data. Please try again later.");
      }
    };

    const fetchBeachesData = async () => {
      try {
        const beachesData = await fetchAllBeaches();
        setBeaches(
          Array.isArray(beachesData)
            ? beachesData.map((b) => ({
                ID: Number((b as Record<string, unknown>).ID),
                beach_name: String((b as Record<string, unknown>).beach_name),
              }))
            : []
        );
      } catch {
        // setBeaches([]);
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

      setFormData((prev) => ({
        ...prev,
        [name]: filePath,
      }));
    }
  };

  const sendFormData = async () => {
    try {
      if (!userData?.ID) {
        throw new Error("User ID is missing");
      }

      const guideData = {
        f_name: formData.f_name,
        l_name: formData.l_name,
        licence_front: formData.licence_front,
        licence_back: formData.licence_back,
        area: formData.area,
        nic_photo: formData.nic_photo,
        phone_number: formData.phone_number,
        beach_id: Number(formData.beach_id),
        user_id: userData.ID, // Pass user ID here
      };

      await createGuide(guideData);

      const role = "guide";
      await updateUserRole(userData.ID, role);

      alert("Guide created successfully! Please log in again to update your role.");
      closeModal();
      window.location.href = "/login";
    } catch (err) {
      console.error("Failed to create guide:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <ProfileTitle title="User Profile" />
      <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <PictureContainer
          imageUrl={userData.profilePic || "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"}
          onImageChange={() => {
            // Optionally handle image change
          }}
        />
        <UserName userName={userData.userName ?? "Unknown User"} />
        <Role role={userData.role ?? "Unknown"} />
        {userData.role === "user" && (
          <GuideButton buttonText="Become a Guide" onClick={onClick} />
        )}
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
                    beach_id: e.target.value,
                  }))
                }
                className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select Beach</option>
                {beaches
                  .filter((b) => b.ID != null)
                  .map((beach) => (
                    <option key={beach.ID} value={beach.ID}>
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
                type="button"
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