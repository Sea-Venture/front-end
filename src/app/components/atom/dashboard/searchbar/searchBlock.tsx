import React from 'react';
import InputPara from './inputPara';
import SearchInput from './searchInput';

const searchBlock = ({ plholder, paraText }: { plholder: string; paraText: string }) => {
  return (
    <div className="flex flex-col justify-center px-6 w-[34%] hover:bg-gray-100 rounded-full transition">

      <div className="xl:block lg:block hidden">
        <InputPara paraText={paraText} />
      </div>


      <div className="hidden xl:block lg:block md:block sm:hidden">
        <SearchInput plholder={plholder} />
      </div>
    </div>
  );
};

export default searchBlock;