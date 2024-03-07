// https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 대충 만든 자판
const solution = (keymap, targets) => {
  const map = new Map();
  let answer = [];
  let cnt = 0;

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      let c = map.get(keymap[i][j]);
      if (c) {
        if (c > j + 1) {
          map.set(keymap[i][j], j + 1);
        }
      } else {
        map.set(keymap[i][j], j + 1);
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    cnt = 0;
    for (let j = 0; j < targets[i].length; j++) {
      let c = map.get(targets[i][j]);
      if (c) {
        cnt += c;
      } else {
        cnt = 0;
        j = targets[i].length;
      }
    }
    cnt ? answer.push(cnt) : answer.push(-1);
  }

  return answer;
};
