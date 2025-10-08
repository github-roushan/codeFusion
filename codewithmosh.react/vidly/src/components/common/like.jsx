import React from 'react';

const Like = ({ isLiked, onToggle }) => {
  return (
      <i 
          className={isLiked ? "fa fa-heart": "fa fa-heart-o"}
          onClick={onToggle}
          style={{
              fontSize: "30px",
              color: isLiked ? "red":"gray",
              cursor: "pointer"
          }}
      ></i>
  );
};

export default Like;
