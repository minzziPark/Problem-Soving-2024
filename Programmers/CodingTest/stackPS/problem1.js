// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어
const solution = (arr) => arr.filter((a, index) => a != arr[index - 1]);
