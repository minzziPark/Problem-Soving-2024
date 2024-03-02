// https://school.programmers.co.kr/learn/courses/30/lessons/181861
// 배열의 원소만큼 추가하기
const solution = (arr) => {
  var answer = [];
  arr.map((a) => {
    for (let i = 0; i < a; i++) {
      answer.push(a);
    }
  });
  return answer;
};
