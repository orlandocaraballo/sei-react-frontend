// define and export our action creators
//  for use in React

export const actionCreators = {
  replaceStudents: (students, count) => ({
    type: "REPLACE_STUDENTS",
    students: students,
    count: count
  }),
  addStudent: student => ({
    type: "ADD_STUDENT",
    student: student
  }),
  removeStudent: id => ({
    type: "REMOVE_STUDENT",
    id: id
  })
};
