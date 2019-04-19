'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const elements = require('./elements')
const events = require('./events')

$(() => {
  elements.homePage()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-button').on('submit', events.onSignOut)
  $('#change-pw-form').on('submit', events.onChangePassword)
  $('#create-goal-form').on('submit', events.onCreateGoal)
  $('#get-index').on('click', events.onIndexGoals)
  $('#get-goal-form').on('submit', events.onGetGoal)
  $('#update-goal-form').on('submit', events.onUpdateGoal)
  $('#update-goal').on('click', () => {
    $('#update-goal-form').trigger('reset')
  })
  $('#get-goal').on('click', events.onLoadGetGoalForm)
  $('#delete-goal-form').on('submit', events.onDeleteGoal)
  $('#update-goal-modal-foreign').on('click', events.onGetThenUpdateGoal)




})
