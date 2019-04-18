'use strict'

const homePage = function () {
  $('#account').hide()
  $('#crud-goals').hide()
  $('#feature1').hide()
  $('#home').hide()
  $('#login-toggle').show()
  $('#sign-up-toggle').show()
  $('#display').html('')

}

const signedInContent = function () {
  $('#account').show()
  $('#crud-goals').show()
  $('#feature1').show()
  $('#home').show()
  $('#login-toggle').show()
  $('#sign-up-toggle').show()
  $('#login-toggle').hide('submit')
  $('#sign-up-toggle').hide()
}

const storedItems = {

}


module.exports = {
  homePage,
  signedInContent,
  storedItems
}
