function solution(cacheSize, cities) {
  var answer = 0;
  const cache = [];
  cities = cities.map((city) => {
    return city.toLowerCase();
  });
  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      cache.splice(cache.indexOf(cities[i]), 1);
      cache.push(cities[i]);
      answer++;
    } else if (cache.length < cacheSize) {
      cache.push(cities[i]);
      answer += 5;
    } else {
      cache.push(cities[i]);
      cache.shift();
      answer += 5;
    }
  }
  return answer;
}