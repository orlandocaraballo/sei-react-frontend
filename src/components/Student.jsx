import React, { Component } from 'react';
import styles from './student.module.css'

class Student extends Component {
  render() {
    const { name, gender, knownFor, cohort }  = this.props.student;

    return  (
      <React.Fragment>
        <h2 className={ styles.strong }>
          { name }
         </h2 >
         <ul>
          <li>{ gender }</li>
          <li>{ knownFor }</li>
          <li>{ cohort.name }</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Student;