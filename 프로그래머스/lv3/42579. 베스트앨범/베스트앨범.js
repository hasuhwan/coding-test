function solution(genres, plays) {
  var answer = [];
  let music = {};
  let genresPriority = [];
  for (let i = 0; i < genres.length; i++) {
    if (music[genres[i]] === undefined) {
      music[genres[i]] = [{ number: i, plays: plays[i] }];
    } else {
      music[genres[i]].push({ number: i, plays: plays[i] });
    }
  }
  for (key in music) {
    music[key] = music[key].sort((a, b) => b.plays - a.plays);
    const total = music[key].reduce((acc, cur) => {
      return acc + cur.plays;
    }, 0);
    genresPriority.push([key, total]);
  }
  genresPriority = genresPriority.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < genresPriority.length; i++) {
    if (music[genresPriority[i][0]][1]) {
      answer.push(
        music[genresPriority[i][0]][0].number,
        music[genresPriority[i][0]][1].number
      );
    } else {
      answer.push(music[genresPriority[i][0]][0].number);
    }
  }
  return answer;
}