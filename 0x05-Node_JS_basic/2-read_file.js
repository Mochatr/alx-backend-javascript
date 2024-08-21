const fs = require('fs');

const parseStudentsByField = (dataList) => {
    const labelsList = dataList[0].split(',');
    const fieldIndex = labelsList.indexOf('field');
    const firstNameIndex = labelsList.indexOf('firstName');

    const studentsByField = {};
    let studentsCount = 0;

    for (let i = 1; i < dataList.length; i+= 1) {
        // Split the data by comma
        if (dataList[i].trim() === '') continue;
        studentsCount += 1;
        const studentList = dataList[i].split(',');
        const fieldName = studentList[fieldIndex];
        if (!studentsByField[fieldName]) studentsByField[fieldName] = [];
        studentsByField[fieldName].push(studentList[firstNameIndex]);
    }

    return { studentsByField, studentsCount };
};

const printStudentsWithField = (studentsByField) => {
    for (const key in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, key)) {
            const firstNamesList = studentsByField[key];
            const studentsNumber = firstNamesList.length;
            const firstNamesStr = firstNamesList.join(', ');
            console.log(`Number of students in ${key}: ${studentsNumber}. List: ${firstNamesStr}`);
        }
    }
};

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const dataList = data.split('\n');
        const studentsData = parseStudentsByField(dataList);
        const { studentsByField, studentsCount } = studentsData;

        console.log(`Number of students: ${studentsCount}`);
        printStudentsWithField(studentsByField);
    } catch (error) {
      throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;