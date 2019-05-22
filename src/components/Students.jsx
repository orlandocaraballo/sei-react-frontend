import React, { Component } from "react";
import Student from "./Student";
import _ from "lodash";
import styles from "./students.module.css";
import store, { actionCreators } from "../redux/store";
import { connect } from "react-redux";

class Students extends Component {
  state = store.getState();

  async componentDidMount() {
    const res = await fetch("https://sei-api.herokuapp.com/students");
    const data = await res.json();

    // console.log(this.props);

    // setup our subscriptions
    // store.subscribe(() => this.setState(store.getState));
    // store.subscribe(() => console.log(store.getState()));

    // dispatch our replace students action
    this.unsubscribe = this.props.replaceStudents(_.shuffle(data), data.length);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit = event => {
    // prevent form submission
    event.preventDefault();

    const { nameInput, genderInput, knownForInput, ageInput } = event.target;

    const id = this.props.count + 9000;

    this.props.addStudent({
      id: id,
      name: `${nameInput.value} ${id}`,
      gender: genderInput.value,
      knownFor: knownForInput.value,
      age: ageInput.value,
      cohort: {
        id: 10,
        name: "new cohort"
      }
    });
  };

  render() {
    const studentElements = this.props.students.map(student => (
      <li key={student.id} className={styles.student}>
        <Student student={student} id={student.id} />
      </li>
    ));

    return (
      <React.Fragment>
        <div>
          <form action="post" onSubmit={this.handleSubmit}>
            <input type="text" name="nameInput" id="" placeholder="name" />
            <input type="text" name="ageInput" id="" placeholder="age" />
            <input type="text" name="genderInput" id="" placeholder="gender" />
            <input
              type="text"
              name="knownForInput"
              id=""
              placeholder="known for"
            />
            <input type="submit" value="Create Rando Student!" />
          </form>
        </div>
        <ul>{studentElements}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  students: state.students
});

const mapDispatchToProps = dispatch => ({
  replaceStudents: (students, count) =>
    dispatch(actionCreators.replaceStudents(students, count)),
  addStudent: student => dispatch(actionCreators.addStudent(student))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
