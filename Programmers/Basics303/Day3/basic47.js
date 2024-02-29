// https://school.programmers.co.kr/learn/courses/30/lessons/181835
// 조건에 맞게 수열 변환하기 3
const solution = (arr, k) => {
  if (k % 2 === 0) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] += k;
    }
  } else {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= k;
    }
  }
  return arr;
};
