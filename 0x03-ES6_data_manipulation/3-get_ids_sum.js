const getStudentIdsSum = (students) => students.reduce((total, student) => total + student.id, 0);

export default getStudentIdsSum;
