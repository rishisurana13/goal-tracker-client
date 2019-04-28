'use strict'

// const store = require('./store.js')
const elements = require('./elements.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up-form').trigger('reset')
}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

    // $('form').trigger('reset')
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
  // $('form').trigger('reset')
}

const onCreateGoal = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)

  api.createGoal(formData)
    .then(ui.createGoalSuccess)
    .then(api.indexGoals)
    .then(ui.getIndexSuccess)
    .catch(ui.createGoalFailure)

  // $('form').trigger('reset')
}

const onIndexGoals = (event) => {
  event.preventDefault()
  // const form = event.target
  // const id = store.user._id

  api.indexGoals()
    .then(ui.getIndexSuccess)
    .catch(ui.failure)
}

const onGetGoal = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getGoal(formData.goal.id) // (formdata.user.id)
    .then(ui.getGoalSuccess)
    .catch(ui.failure)
}

const onGetThenUpdateGoal = function () {
  const goal = elements.storedItems.storedGoal
  onLoadGetGoalForm()
// add
  if (goal === undefined || goal === null) {
    $('#update-goal-form').trigger('reset')
  } else {
    $('#update-goal-form').trigger('reset')
    $('#update-form-id').val($('#update-form-id').val() + goal._id)
    $('#update-form-title').val($('#update-form-title').val() + goal.title)
    $('#update-form-description').val($('#update-form-description').val() + goal.description)
    $('#update-form-importance').val($('#update-form-importance').val() + goal.importance)
    $('#update-form-completed').val($('#update-form-completed').val() + goal.completed)
  }

  elements.storedItems.storedGoal = null
}

const onLoadGetGoalForm = function () {
  $('#this-content-title').text(' ')
  $('#this-content-importance').text(' ')
  $('#this-content-description').text('')
  $('#this-content-steps').text('')
  $('#this-content-completed').text('')
  $('#this-content-id').text('')
  $('#get-goal-form').trigger('reset')
}

const onUpdateGoal = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const goal = formData.goal

  api.updateGoal(goal)
    .then(ui.updateGoalSuccess)
    .then(api.indexGoals)
    .then(ui.getIndexSuccess)
    .catch(ui.updateGoalFailure)
}

const onDeleteGoal = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleteGoal(formData.goal.id)
    .then(ui.deleteGoalSuccess) // this
    .then(api.indexGoals)
    .then(ui.getIndexSuccess)
    .catch(ui.deleteGoalFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onCreateGoal,
  onIndexGoals,
  onGetGoal,
  onUpdateGoal,
  onDeleteGoal,
  onLoadGetGoalForm,
  onGetThenUpdateGoal
}
