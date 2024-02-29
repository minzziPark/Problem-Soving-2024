// https://school.programmers.co.kr/learn/courses/30/lessons/120818
// 옷가게 할인 받기
const solution = (price) =>
  price >= 500000
    ? ~~(price * 0.8)
    : price >= 300000
    ? ~~(price * 0.9)
    : price >= 100000
    ? ~~(price * 0.95)
    : price;
