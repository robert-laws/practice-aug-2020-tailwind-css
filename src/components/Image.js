import React from 'react';

const Image = ({ srcFile, imgStyles = {}, altText }) => {
  return <img src={srcFile} style={imgStyles} alt={altText} />;
};

export default Image;
