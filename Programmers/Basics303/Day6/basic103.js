// https://school.programmers.co.kr/learn/courses/30/lessons/181841
// 꼬리 문자열
const solution = (str_list, ex) =>
  str_list.filter((a) => !a.includes(ex)).join("");
