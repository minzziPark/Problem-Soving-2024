// https://school.programmers.co.kr/learn/courses/30/lessons/181847
// 0 떼기
const solution = (n_str) => {
  let i;
  for (i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0") {
      break;
    }
  }
  return n_str.slice(i);
};

// 머리가 나쁘면 몸이 고생한다ㅋㅋㅋㅋㅋ
// 앞에 0이 오는 걸 가장 쉽게 제거하는 방법은 그냥 타입변화만 해줘둬 됌
// Number(n_str)
