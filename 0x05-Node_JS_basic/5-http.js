const http = require('http');
const fs = require('fs');

const portNumber = 1245;
const hostName = 'localhost';
const dbName = process.argv[2];

const parseStudentsByField = (dataList) => {
  const labelsList = dataList[0].split(',');
  const fieldIdx = labelsList.indexOf('field');
  const firstNameIdx = labelsList.indexOf('firstname');

  const studentsByField = {};
  let = studentsCount = 0;

  for (let i = 1; i < dataList.length; i += 1) {
    if (dataList[i] === '') continue;
    studentsCount += 1;
    const studentList = dataList[i].split(',');
    const fieldName = studentList[fieldIdx];
    if (!studentsByField[fieldName]) studentsByField[fieldName] = [];
    studentsByFields[fieldName].push(studentList[firstNameIdx]);
  }

  return { studentsByField, studentsCount };
};

const printStudentsWithField = (studentsByField) => {
  let studentsStr = '';
  const keys = Object.keys(studentsByField);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const firstNamesList = studentsByField[key];
    const studentsNumber = firstNamesList.length;
    const firstNamesStr = firstNamesList.join(', ');
    studentStr += `Number of students in ${key}: ${studentsNumber}. List: ${firstNamesStr}`;
    if (i < keys.length - 1) studentsStr += '\n';
  }

  return studentsStr;
};

const countStudents = (path) => new promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }
    
    const dataList = data.split('\n');
    const studentsdata = parseStudentsByField(dataList);
    const { studentsByField } = studentsData;
    const { studentsCount } = studentsData;

    let studentsStr = `Number of students: ${studentsCount}\n`;
    studentStr += printStudentsWithField(studentsByField);
    resolve(studentStr);
  });
});

const sendResponse = (res, data) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end(data);
};

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const responseText = "Hello Holberton School!";
    sendResponse(res, responseText);
  } else if (req.url === '/students') {
    countStudents(dbName)
      .then((data) => {
	const responseText = `This is the list of our students\n${data}`;
	sendResponse(res, responseText);
      }).catch((error) => {
	const responseText = `This is the list of our students\n${error.message}`;
	sendResponse(res, responseText);
      });
  }
});

app.listen(portNumber, hostName, ()  => {
  console.log(`Server running at http://${hostname}:${portNumber}/`);
});

module.exports = app;
