function solution(skill, skill_trees) {
  const regexp = new RegExp(`[^${skill}]`, "g");
  const newArr = skill_trees
    .map((ele) => {
      return ele.replace(regexp, "");
    })
    .filter((ele) => {
      return skill.indexOf(ele) === 0 || ele === "";
    });
  return newArr.length;
}