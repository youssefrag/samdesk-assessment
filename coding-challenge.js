function countSafeReports(levels) {
  let safeCount = 0;

  topLevelLoop: for (let report of levels) {
    if (report[0] > report[report.length - 1]) {
      report.reverse();
    }

    for (let i = 1; i < report.length; i++) {
      if (report[i] - report[i - 1] <= 0 || report[i] - report[i - 1] > 3) {
        continue topLevelLoop;
      }
    }
    console.log(report);
    safeCount++;
  }
  return safeCount;
}

const levels = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

countSafeReports(levels);
