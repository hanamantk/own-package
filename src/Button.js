import React from 'react';
const bgColor={
   background:'pink',
   color:'blue',
  padding:'10px'
};
 const TButton = props => (
    <button color={props.color} style={bgColor}>
       {props.children}
    </button>
);
export default TButton;