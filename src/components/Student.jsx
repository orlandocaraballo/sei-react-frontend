import React, { Component } from "react";
import styles from "./student.module.css";
import store, { actionCreators } from "./store";

class Student extends Component {
  handleRemoveStudent = e => {
    store.dispatch(actionCreators.removeStudent(this.props.id));
  };

  render() {
    const { name, gender, knownFor, cohort } = this.props.student;

    return (
      <React.Fragment>
        <h2 className={styles.strong}>{name}</h2>
        <ul>
          <li>{gender}</li>
          <li>{knownFor}</li>
          <li>{cohort.name}</li>
        </ul>
        <button onClick={this.handleRemoveStudent}>Remove me!</button>
      </React.Fragment>
    );
  }
}

export default Student;
