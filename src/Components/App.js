import React, { Component } from 'react'
import Exercises from './Exercises'
import { Header, Footer } from './Layouts'
import { muscles, exercises } from '../store.js'


export default class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscle() {
    return this.state.exercises
  }

  render() {
    return (
      <>
        <Header/>
        <Exercises/>
        <Footer muscles={muscles}/>
      </>
    );
  }
}
