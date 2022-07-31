import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히가세요!');
  const [color, setColor] = useState('black');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨강</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파랑</button>
      <button style={{ color: 'yellow' }} onClick={() => setColor('yellow')}>노랑</button>
    </div>
  );
};

export default Say;