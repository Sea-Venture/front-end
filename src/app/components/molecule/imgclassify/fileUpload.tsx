import React from "react";
import Input from '../../atom/imgclassify/input';

const FileUpload = ({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="flex flex-col items-right">
      <Input onChange={onChange} />
    </div>
  );
};

export default FileUpload;
