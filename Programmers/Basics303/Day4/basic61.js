// https://school.programmers.co.kr/learn/courses/30/lessons/181928
// 이어 붙인 수
const solution = (num_list) => {
  var even = "";
  var odd = "";
  num_list.map((a) => {
    a % 2 === 0 ? (even += String(a)) : (odd += String(a));
  });
  return Number(even) + Number(odd);
};
