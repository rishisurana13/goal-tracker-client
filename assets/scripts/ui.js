'use strict'

const store = require('./store.js')
const elements = require('./elements.js')


const signInSuccess = (responseData) => {
  $('#user-message').text('successfully signed In!')
  store.userId = responseData.user.id
  store.user = responseData.user

  elements.signedInContent()
  $('#sign-in-form').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}
const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
  $('#sign-up-form').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const signOutSuccess = (responseData) => {
  elements.homePage()
  $('#user-message').text('successfully signed Out!')
  store.user = null


  setTimeout(function () {
    $('#display').text('')
  }, 2000)


}

const changePasswordFailure = () => {
  $('#user-message').text('error in changing password')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#change-pw-form').trigger('reset')
}
const changePasswordSuccess = () => {
  $('#user-message').text('successfully changed password!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#change-pw-form').trigger('reset')
}

const failure = () => {

  $('#user-message').text('something went wrong')

  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)


  // $('form').trigger('reset')
}
module.exports = {
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  failure,
  changePasswordFailure,
  changePasswordSuccess
}
