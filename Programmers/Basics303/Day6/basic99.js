// https://school.programmers.co.kr/learn/courses/30/lessons/181885
// 할 일 목록
const solution = (todo_list, finished) =>
  todo_list.filter((_, index) => !finished[index]);
