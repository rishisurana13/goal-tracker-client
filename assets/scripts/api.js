'use strict'

const config = require('./config.js')
const store = require('./store.js')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',

    data: formData
  })
}

const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const createGoal = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: formData
  })
}

const indexGoals = (id) => {
  return $.ajax({
    url: config.apiUrl + '/goals/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGoal = function (id) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + `${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGoal = function (goal) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + `${goal.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      goal: goal
    }
  })
}
const deleteGoal = function (id) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + `${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

module.exports = {
  signOut,
  signIn,
  changePassword,
  signUp,
  createGoal,
  indexGoals,
  getGoal,
  updateGoal,
  deleteGoal
}
