import { readFileSync } from "fs";

function getDomain(referrer = "") {
  const domain = referrer.split("/")[2];
  return domain?.startsWith("www.") ? domain.slice(4) : domain;
}

function getReferrersFromLog(file: string) {
  const data = readFileSync(file, "utf8");
  const lines = data.split("\n");
  return lines.map((line) => getDomain(line.split('"')[3])).filter(Boolean);
}

function countAndSortReferrers(referrers: string[]) {
  const map = referrers.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  const map1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  return map1;
}

const referrers = getReferrersFromLog("./tsml-ui.log");
const map = countAndSortReferrers(referrers);

console.log(map);
