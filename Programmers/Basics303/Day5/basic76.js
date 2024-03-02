// https://school.programmers.co.kr/learn/courses/30/lessons/181856
// 배열 비교하기
const solution = (arr1, arr2) =>
  arr1.length > arr2.length
    ? 1
    : arr1.length < arr2.length
    ? -1
    : arr1.reduce((a, b) => (a += b)) > arr2.reduce((a, b) => (a += b))
    ? 1
    : arr1.reduce((a, b) => (a += b)) < arr2.reduce((a, b) => (a += b))
    ? -1
    : 0;
