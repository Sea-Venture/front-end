import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const providerStyles = {
  google: 'bg-white text-gray-800 border border-black hover:bg-gray-100',
  facebook: 'bg-[#1877F2] text-white border border-black hover:bg-[#145db2]',
};

const providerIcons = {
  google: <FcGoogle size={24} />,
  facebook: <FaFacebook size={24} className="text-white" />,
};

const ssoButton = ({ provider }: { provider: 'google' | 'facebook' }) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 px-2 py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${providerStyles[provider]}`}
      style={{ width: '100%' }}
    >
      {providerIcons[provider]}
      <span>Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}</span>
    </button>
  );
};

export default ssoButton;