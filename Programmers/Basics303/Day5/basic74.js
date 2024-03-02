// https://school.programmers.co.kr/learn/courses/30/lessons/181915
// 글자 이어 붙여 문자열 만들기
const solution = (my_string, index_list) =>
  index_list.map((a) => my_string[a]).join("");
