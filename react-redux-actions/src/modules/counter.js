// 가장 먼저 해야할 작업 : 액션 타입 정의
// 액션 타입 = 대문자 정의
// 액션 타입 내용 = 모듈이름/액션이름 => 액션 이름 겹치는 것을 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의
// export 키워드를 사용하여 다른 파일에서 불러와 사용 가능하게 하기
// 여러 개를 내보낼 수 있음
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 모듈의 초기 상태 정의
const initialState = {
  number: 0
};

// 리듀서 함수 생ㅇ성
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

// 단 한개만 내보낼 수 있음
export default counter;