import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Greg Ganteng')

  const handleClick = () => {
    if (text === "Greg Ganteng"){
      setText('Dinda Cantik')
    }
    else{
      setText('Greg Ganteng')
    }
  }
  return (
    <div>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </div>
  );
};

export default UseStateBasics;
