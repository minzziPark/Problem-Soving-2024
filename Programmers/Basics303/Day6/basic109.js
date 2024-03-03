// https://school.programmers.co.kr/learn/courses/30/lessons/181898
// 가까운 1 찾기
const solution = (arr, idx) => {
  let answer = -1;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer = i;
      break;
    }
  }
  return answer;
};

// indexOf(1, idx)
