// https://school.programmers.co.kr/learn/courses/30/lessons/70129
const solution = (s) => {
  let change = 0;
  let remove = 0;
  while (s !== "1") {
    let b_size = s.length;
    s = [...s].filter((a) => a !== "0").join("");
    console.log(s);
    change += 1;
    remove += b_size - s.length;
    s = Number(s.length).toString(2);
    console.log(s);
  }
  return [change, remove];
};
