import React, { useState } from 'react';
import { FaPlus, FaCaretDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import SearchBar from '@/app/components/atom/addLocation/searchbar';
import AddButton from '@/app/components/atom/addLocation/addButton';
import AddLocationMenu from '@/app/components/atom/addLocation/addLocationMenu';

const AddLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
              <div className="w-full md:w-1/2">
                <SearchBar />
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <AddButton onClick={openModal} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End block */}

      {/* Modal */}
      {isModalOpen && ( <AddLocationMenu onClick={closeModal} /> )}
    </>
  );
};

export default AddLocation;