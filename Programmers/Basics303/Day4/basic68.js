// https://school.programmers.co.kr/learn/courses/30/lessons/120839
// 가위 바위 보
const solution = (rsp) => {
  var answer = "";
  for (var i = 0; i < rsp.length; i++) {
    rsp[i] === "2"
      ? (answer += "0")
      : rsp[i] === "0"
      ? (answer += "5")
      : (answer += "2");
  }
  return answer;
};

// 객체사용법
// function solution(rsp) {
// 	let arr = {
// 			2: 0,
// 			0: 5,
// 			5: 2
// 	};
// 	var answer = [...rsp].map(v => arr[v]).join("");
// 	return answer;
// }
