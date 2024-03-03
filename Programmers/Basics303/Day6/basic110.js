// https://school.programmers.co.kr/learn/courses/30/lessons/181834
// l로 만들기
const solution = (myString) =>
  myString.split("").reduce((a, b) => (b < "l" ? (a += "l") : (a += b)), "");
