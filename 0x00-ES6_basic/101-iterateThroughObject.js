export default function iterateThroughObject(reportWithIterator) {
  const reportWithIterator = [];

  for (const value of Object.values(report.allEmployees)) {
    reportWithIterator.push(...value);
  }

  return reportWithIterator;
}
