import React from "react";
import AddLocation from "../../molecule/dashboard/add/addLocation/addLocation";

const AddContent = () => {
  return (
    <>
    <div className="p-4 bg-white dark:bg-gray-900 h-[calc(100vh-4rem)] overflow-y-auto sm:ml-64">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Add Content
      </h1>

      <AddLocation/>
    </div>

    </>
  );
};

export default AddContent;