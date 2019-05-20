import React, { Component } from "react";
import Student from "./Student";
import _ from "lodash";
import styles from "./students.module.css";
import store, { actionCreators } from "./store.js";
import { generateStudent } from "../utils/generators";

class Students extends Component {
  // state = {
  //   students: store.getState().students
  //   // amount: store.getState().amount
  // };

  state = store.getState();

  async componentDidMount() {
    const res = await fetch("https://sei-api.herokuapp.com/students");
    const data = await res.json();

    store.subscribe(() => this.setState(store.getState));
    store.subscribe(() => console.log(store.getState()));

    store.dispatch(
      actionCreators.replaceStudents(_.shuffle(data), data.length)
    );
  }

  handleAddStudent = e => {
    store.dispatch(
      actionCreators.addStudent(generateStudent(store.getState().count))
    );
  };

  render() {
    const studentElements = this.state.students.map(student => (
      <li key={student.id} className={styles.student}>
        <Student student={student} id={student.id} />
      </li>
    ));

    return (
      <React.Fragment>
        <button onClick={this.handleAddStudent}>Add Rando Student!</button>
        <ul>{studentElements}</ul>
      </React.Fragment>
    );
  }
}

export default Students;
