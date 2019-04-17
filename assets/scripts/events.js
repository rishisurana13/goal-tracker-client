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
    .catch(ui.failure)

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
  onDeleteGoal
}
