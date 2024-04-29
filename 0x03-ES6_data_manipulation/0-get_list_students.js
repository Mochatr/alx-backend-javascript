const createObject = (id, firstName, location) => ({ id, firstName, location });

const getListStudents = () => [
  createObject(1, 'Guillaume', 'San Francisco'),
  createObject(2, 'James', 'Columbia'),
  createObject(5, 'Serena', 'San Francisco')
];

export default getListStudents;
