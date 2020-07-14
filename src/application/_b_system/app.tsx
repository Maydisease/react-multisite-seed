import React, {useState} from 'react';

export default () => {

  const [text, setText] = useState(`I'm Default Text.`);

  const changeText = () => {
    setText(text === `I'm Default Text.` ? `I'm Change Text.` : `I'm Default Text.`);
  };

  return (
    <>
      <h2>b_system</h2>
      <p>{text}</p>
      <button onClick={changeText}>change</button>
    </>
  );
}
