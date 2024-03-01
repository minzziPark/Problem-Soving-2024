// https://school.programmers.co.kr/learn/courses/30/lessons/181927
// 마지막 두 원소
const solution = (num_list) => {
  var cal = num_list[num_list.length - 1] - num_list[num_list.length - 2];
  cal > 0
    ? num_list.push(cal)
    : num_list.push(num_list[num_list.length - 1] * 2);
  return num_list;
};
