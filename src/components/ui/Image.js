import React from 'react';

export const Image = ({ srcFile, imgStyles = {}, altText }) => {
  return <img src={srcFile} style={imgStyles} alt={altText} />;
};
