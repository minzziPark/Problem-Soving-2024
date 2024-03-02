// https://school.programmers.co.kr/learn/courses/30/lessons/181875
// 배열에서 문자열 대소문자 변환하기
const solution = (strArr) =>
  strArr.map((a, index) =>
    index % 2 === 0 ? a.toLowerCase() : a.toUpperCase()
  );
