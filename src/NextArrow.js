import React from 'react';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      Next
    </div>
  );
};

export default NextArrow;
