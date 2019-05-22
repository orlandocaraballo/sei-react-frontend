// define and export our action creators
//  for use in React
export const replaceStudents = (students, count) => ({
  type: "REPLACE_STUDENTS",
  students: students,
  count: count
});

export const addStudent = student => ({
  type: "ADD_STUDENT",
  student: student
});

export const removeStudent = id => ({
  type: "REMOVE_STUDENT",
  id: id
});
