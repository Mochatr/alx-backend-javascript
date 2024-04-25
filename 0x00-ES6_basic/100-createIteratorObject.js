export default function createIteratorObject(report) {
  const reportWithIterator = [];

  for (const value of Object.values(report.allEmployees)) {
    reportWithIterator.push(...value);
  }

  return reportWithIterator;
}
