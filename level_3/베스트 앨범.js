function solution(genres, plays) {
  var answer = [];
  let dic = {};
  const map = new Map();
  const arr = [];
  for (let i = 0; i < genres.length; i++) {
    if (genres[i] in dic) {
      dic[genres[i]]["values"].push([plays[i], i]);
      dic[genres[i]]["total"] += plays[i];
    } else {
      dic[genres[i]] = { values: [[plays[i], i]], total: plays[i] };
    }
  }

  for (key in dic) {
    // dic에 들어있는 각 장르마다 plays 횟수를 기준으로 내림차순 정렬
    dic[key]["values"].sort((a, b) => b[0] - a[0]);
    // map에 총 plays 수와 해당 장르를 삽입
    map.set(dic[key]["total"], key);
    // arr에 총 plays 수를 삽입
    arr.push(dic[key]["total"]);
  }
  // 총 plays 수를 내림차순으로 정렬
  arr.sort((a, b) => b - a);

  for (total_num of arr) {
    const genre = map.get(total_num);
    let count = 0; // 장르당 수록되는 노래 개수
    // 장르당 노래를 두개까지 또는 하나만 존재한다면 한 개만 수록
    while (count < 2 && dic[genre]["values"][count]) {
      answer.push(dic[genre]["values"][count++][1]);
    }
  }
  return answer;
}
