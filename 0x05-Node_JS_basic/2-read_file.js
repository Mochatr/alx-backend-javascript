// The script should attempt to read the database file synchronously

const fs = require('fs');

function countStudents(path) {
    try {
	const data = fs.readFileSync(path, 'utf-8');
	const lines = data.split('\n').filter(line => line.trim() !== '');
	
	const students = lines.slice(1).map(line => {
	    const [firstname, lastname, age, field] = line.split(',');
	    return { firstname, lastname, age, field };
	});
	
	const numberOfStudents = students.length;
	console.log(`Number of students: ${numberOfStudents}`);

	const fields = students.reduce((acc, student) => {
	    if (student.field in acc) {
		acc[student.field].push(student.firstname);
	    } else {
		acc[student.field] = [student.firstname];
            }
	    return acc;
        }, {});
	
	for (const [field, firstnames] of Object.entries(fields)) {
	    console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
	}
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
