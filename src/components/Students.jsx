import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
  state = {
    students: []
  };

  async componentDidMount() {
    const res = await fetch("https://sei-api.herokuapp.com/students");
    const data = await res.json();
    
    this.setState({
      students: data
    });
  }

  render() {
    const studentElements = this.state.students.map(student => (
      <li key={ student.id }><Student student={ student } /></li>
    ));

    return (
      <ul>{ studentElements }</ul>
    );
  }
}

export default Students;