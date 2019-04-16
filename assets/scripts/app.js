'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const elements = require('./elements')
const events = require('./events')

$(() => {
  // $('#account').hide()
  // $('#crud-goals').hide()
  // $('#feature1').hide()
  // $('#home').hide()
  elements.homePage()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-button').on('submit', events.onSignOut)
  $('#change-pw-form').on('submit', events.onChangePassword)
})
