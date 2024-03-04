// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬
function solution(nums) {
  const map = new Map();
  const answer = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    map.get(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);
  }

  return answer < map.size ? answer : map.size;
}
