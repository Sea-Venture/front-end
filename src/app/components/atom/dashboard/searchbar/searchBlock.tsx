import React from 'react';
import InputPara from './inputPara';
import SearchInput from './searchInput';

interface SearchBlockProps {
  plholder: string;
  paraText: string;
  eltype: string;
  options?: string[]; // Optional prop for dropdown options
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void; // Updated to handle both HTMLSelectElement and HTMLInputElement
}

const SearchBlock: React.FC<SearchBlockProps> = ({ plholder, paraText, eltype, options, onChange }) => {
  return (
    <div className="flex flex-col justify-center px-6 w-full sm:w-[34%] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg sm:rounded-full transition">
      {/* For larger devices */}
      <div className="hidden sm:block">
        <InputPara paraText={paraText} />
      </div>
      {/* For smaller devices */}
      <div className="block sm:hidden">
        <InputPara paraText={paraText} />
      </div>
      <div className="block">
        <SearchInput plholder={plholder} eltype={eltype} options={options} onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchBlock;