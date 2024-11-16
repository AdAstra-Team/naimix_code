import React from 'react';

const Avatar = ({ src, size }) => {
  return (
    <img
      src={src}
      alt="Avatar"
      className={`w-${size} h-${size} rounded-full object-cover`}
    />
  );
};

export default Avatar;
