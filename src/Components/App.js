import React, { Component } from 'react'
import Exercises from './Exercises'
import { Header, Footer } from './Layouts'
import { muscles, exercises } from '../store.js'


export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise]

      return exercises
    }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(( { exercises } ) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise }  = this.state
    
    return (
      <>
        <Header/>
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </>
    );
  }
}
