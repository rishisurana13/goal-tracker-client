'use strict'

// const store = require('./store.js')
const elements = require('./elements.js')
const api = require('./api.js')
const ui = require('./ui.js')
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
  $('#change-pw-form').trigger('reset')
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

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword
}
