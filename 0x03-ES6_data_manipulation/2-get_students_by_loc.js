const getStudentsByLocation = (student, city) => {
    return students.filter(student => student.location === city);
};

export default getStudentsByLocation;
