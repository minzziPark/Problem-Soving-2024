// https://school.programmers.co.kr/learn/courses/30/lessons/181844
// 배열의 원소 삭제하기
const solution = (arr, delete_list) =>
  arr.filter((a) => !delete_list.includes(a));
