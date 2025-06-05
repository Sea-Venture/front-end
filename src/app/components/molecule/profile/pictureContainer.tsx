import React, { useState, useRef } from 'react';
import ProfileImage from '../../atom/dashboard/profile/profileImage';
import EditButton from '../../atom/dashboard/profile/editButton';
import { FaEdit } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const PictureContainer = ({ imageUrl, onImageChange }: { imageUrl: string, onImageChange: (file: File | null) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCameraOpen(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const handleAddClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOpen(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Could not access camera. Please check permissions.');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
            onImageChange(file);
            closeModal();
          }
        }, 'image/jpeg');
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();


  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
      closeModal();
    }
  };

  const handleDeleteClick = () => {
    onImageChange(null);
    closeModal();
  };

  return (
    <div className="relative w-64 h-64 mb-8">

      <ProfileImage imageUrl={imageUrl} />
      <EditButton onClick={handleEditClick} />


      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Profile Photo</h2>


            {isCameraOpen ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-64 h-64 object-cover rounded-lg mb-4"
                />
                <button
                  onClick={capturePhoto}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-2 rounded-full"
                >
                  Capture
                </button>
              </div>
            ) : (
              <img src={imageUrl} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
            )}

            <div className="flex justify-between mt-4 gap-2">
              <button 
                onClick={handleAddClick}
                className="bg-blue-500 text-white p-2 rounded flex items-center"
              >
                <IoAddCircleSharp className="mr-2" /> Camera
              </button>

              <button 
                onClick={handleUploadClick}
                className="bg-gray-500 text-white p-2 rounded flex items-center"
              >
                <FaEdit className="mr-2" /> Upload
              </button>

              <button 
                onClick={handleDeleteClick}
                className="bg-red-500 text-white p-2 rounded flex items-center"
              >
                <MdOutlineDelete className="mr-2" /> Delete
              </button>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 bg-red-500 text-white p-2 rounded-full flex items-center justify-center"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PictureContainer;