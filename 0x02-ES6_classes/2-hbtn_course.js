// implement the class
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw TypeError('Name must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of strings');
    } else {
      students.forEach((name) => {
        if (typeof name !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });

      this._students = students;
    }
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(studentsList) {
    if (!Array.isArray(studentsList)) {
      throw TypeError('Students must be an array of strings');
    } else {
      studentsList.forEach((name) => {
        if (typeof name !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });

      this._students = studentsList;
    }
  }
}
