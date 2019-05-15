import React, { Component } from 'react';
import styles from './student.module.css'

class Student extends Component {
  render() {
    return (
      <React.Fragment>
        <strong className={styles.strong}>
          {this.props.student.name}
        </strong>
        &nbsp;=>&nbsp;
        <em>{this.props.student.knownFor}</em>
      </React.Fragment>
    );
  }
}

export default Student;