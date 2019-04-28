'use strict'

const store = require('./store.js')
const elements = require('./elements.js')
const events = require('./events.js')

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
const signInFailure = function () {
  $('#user-message').text('Sign in Failed! Please try again.')
  $('#sign-in-form').trigger('reset')
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
  $('#display').text('')
  const goals = responseData.goals

  const sortGoals = goals.sort(function (a, b) {
    return a.completed - b.completed
  })

  for (let i = 0; i < (sortGoals.length); i++) {
    const goal = sortGoals[i]
    if (goal.owner === store.user.id) {

      const userHtml = (`

        <div id="box${i}" class="col-sm-4 col-lg-3 box">
      <pre>

  Key: ${goal.id}
  Goal: ${goal.title}
  Importance: ${goal.importance}

  Description: ${goal.description}
  Completed: ${goal.completed}
  Steps: ${goal.steps}




  </pre>
  </div>

      `)
      // <button class="btn btn-white" id="see-goal-button" data-toggle="modal" type="button" data-target="#get-this-Modal">Details</button>

      $('#display').append(userHtml)

      if (goal.completed === true) {
        $(`#box${i}`).addClass('completed')
      }
    }
  }

  $('#user-message').text('Successfully retrieved Index')

  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const getGoalSuccess = function (responseData) {
  const goal = responseData.goal
  const thisGoal = elements.storedItems
  thisGoal.storedGoal = responseData.goal
if (goal !== null) {
  $('#this-content-title').text('Title: ' + goal.title)
  $('#this-content-importance').text('Importance: ' + goal.importance)
  $('#this-content-description').text('Description: ' + goal.description)
  $('#this-content-steps').text('Steps: ' + goal.steps)
  $('#this-content-completed').text('Completed: ' + goal.completed)
  $('#this-content-id').text('Key: ' + goal.id)
  $('#get-goal').trigger('reset')
}
$('#get-goal-feedback').text('RETRIEVED SUCCESSFULLY')
setTimeout(function () {
  $('#get-goal-feedback').text('')
}, 2000)

}



const updateGoalSuccess = function () {
  $('#user-message-2').text('GOAL UPDATED')
  $('#update-goal-feedback').text('GOAL updated successfully!')
  setTimeout(function () {
    $('#update-goal-feedback').text('')
  }, 2000)
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
  $('#update-goal-form').trigger('reset')
  if (elements.storedItems.storedGoal !== null) {
    elements.storedItems.storedGoal = null
  }

}

const updateGoalFailure = function () {
  $('#user-message-2').text('GOAL failed to update')
  $('#update-goal-feedback').text('GOAL Failed to update')
  setTimeout(function () {
    $('#update-goal-feedback').text('')
  }, 2000)

  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
  $('#update-goal-form').trigger('reset')
  if (elements.storedItems.storedGoal !== null) {
    elements.storedItems.storedGoal = null
  }
}

const deleteGoalSuccess = function () {
  $('#delete-goal-form').trigger('reset')
  $('#user-message-2').html('DELETED Successfully')
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
  $('#delete-goal-feedback').text('DELETED SUCCESSFULLY')
  setTimeout(function () {
    $('#delete-goal-feedback').text('')
  }, 2000)
}

const deleteGoalFailure = function () {
  $('#delete-goal-form').trigger('reset')
  $('#user-message-2').html('Something went wrong')
  setTimeout(function () {
    $('#user-message-2').text('')
  }, 2000)
  $('#delete-goal-feedback').text('DELETE FAILED')
  setTimeout(function () {
    $('#delete-goal-feedback').text('')
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
  updateGoalFailure,
  signInFailure
}
