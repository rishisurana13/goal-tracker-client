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
    $('#user-message').text('')
  }, 2000)


}

const changePasswordFailure = () => {
  $('#change-pw-feedback').text('error in changing password')
  setTimeout(function () {
    $('#change-pw-feedback').text('')
  }, 2000)
  $('#change-pw-form').trigger('reset')
}
const changePasswordSuccess = () => {
  $('#change-pw-feedback').text('successfully changed password!')
  setTimeout(function () {
    $('#change-pw-feedback').text('')
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

const createGoalSuccess = () => {
  $('#create-goal-feedback').text('Successfully Created Your Goal, Happy Hunting!')
  $('#create-goal-form').trigger('reset')
  setTimeout(function () {
    $('#create-goal-feedback').text('')
  }, 3000)
}

const createGoalFailure = () => {
  $('#create-goal-feedback').text('Error in Creating goal, try again :(')
  $('#create-goal-form').trigger('reset')
  setTimeout(function () {
    $('#create-goal-feedback').text('')
  }, 2000)
}

const getIndexSuccess = (responseData) => {
  $('#display').html('')
  const goals = responseData.goals
  const sortGoals = goals.sort(function (a, b) {
    return b.importance - a.importance
  })



  for (let i = 0; i < (sortGoals.length); i++) {
    const goal = sortGoals[i]
    if (goal.owner === store.user._id) {
    const normal = i + 1
    const userHtml = (`

        <div class="col-sm-4 col-lg-3 box">
      <pre>

  ID: ${normal}
  Goal: ${goal.title}
  Importance: ${goal.importance}


  Description: ${goal.description}
  key: ${goal._id}

      </pre>
  </div>

      `)

    $('#display').append(userHtml)
}
}



  $('#user-message').text('Successfully retrieved Index')

  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const getGoalSuccess = function (responseData) {
  const goal = responseData.goal

$('#display').html(' ')

  const userHtml = (`
    <div class="col-sm-4 col-lg-3 box">
  <pre>

    Goal: ${goal.title}
    Description: ${goal.description}
    Importance: ${goal.importance}


    Steps: ${goal.steps}



    key: ${goal._id}


   </pre>





  </div>
          `)

  $('#display').append(userHtml)
  $('#get-goal').trigger('reset')
}

const updateGoalSuccess = function () {
  $('#user-message-2').html('goal UPDATED')
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
  $('#update-goal-form').trigger('reset')

}

const updateGoalFailure = function () {
  $('#user-message-2').html('goal failed to update')
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
  $('#update-goal-form').trigger('reset')

}

const deleteGoalSuccess = function () {

  $('#delete-goal-form').trigger('reset')
  $('#user-message-2').html('DELETED Successfully')
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
}

const deleteGoalFailure = function () {

  $('#delete-goal-form').trigger('reset')
  $('#user-message-2').html('Something went wrong')
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
}

module.exports = {
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  failure,
  changePasswordFailure,
  changePasswordSuccess,
  createGoalSuccess,
  createGoalFailure,
  getIndexSuccess,
  getGoalSuccess,
  updateGoalSuccess,
  deleteGoalSuccess,
  deleteGoalFailure,
  updateGoalFailure
}
