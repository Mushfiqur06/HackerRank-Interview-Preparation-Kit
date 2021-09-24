function jumpingOnClouds(c) {
  let min = 2;
  let max = 100;
  let jumpCounter = 0;

  if (c.length >= min && c.length <= max) {
    jumpCounter = findPaths(c, []);
  }
  return typeof jumpCounter === "number" ? jumpCounter : jumpCounter.length;
}

function findPaths(count, paths) {
  if (count.length > 1) {
    let path1 = paths.slice();
    let path2 = paths.slice();

    path1 = count[1] !== 1 ? [...path1, 1] : 0;
    path2 = count[2] !== 1 ? [...path2, 2] : 0;

    if (path1 === 0 && path2 === 0) {
      paths = 0;
    } else if (path1 !== 0 && path2 === 0) {
      return findPaths(count.slice(1), path1);
    } else if (path1 === 0 && path2 !== 0) {
      return findPaths(count.slice(2), path2);
    } else if (path1 !== 0 && path2 !== 0) {
      path1 = findPaths(count.slice(1), path1);
      path2 = findPaths(count.slice(2), path2);
      return path1.length < path2.length ? path1 : path2;
    }
  }

  return paths;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
