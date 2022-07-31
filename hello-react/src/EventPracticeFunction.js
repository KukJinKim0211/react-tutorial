import { useState } from 'react';

const EventPracticeFunction = () => {
  const [form, setForm] = useState({
    userName: '',
    message: ''
  })
  const { userName, message } = form;
  const onChange = (e) => {
    const newForm = {
      // 기존의 form 내용을 복사
      ...form,
      // 원하는 값 덮어씌우기
      [e.target.name]: e.target.value
    }
    setForm(newForm);
  };
  const onClick = () => {
    alert(userName + ' : ' + message);
    setForm({
      userName: '',
      message: ''
    })
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }
  return (
    <div>
      <h1>이벤트 연습 함수 컴포넌트</h1>
      <input type="text" name="userName" placeholder="사용자명" value={userName} onChange={onChange} />
      <input type="text" name="message" placeholder="내용입력" value={message} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick} >확인</button>
    </div>
  )
}

export default EventPracticeFunction