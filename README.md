# Goal Tracker by the 7 Islands and Co.
Welcome to the client-facing repo for our Goal tracking app.
Describe and set your goals, create a plan to achieve them and track your
progress as make steps toward achieving them!

## HOW TO Use (CLIENT)
+ Sign in then sign up
+ Create a goal -- CRUD Goals > Create (fill out the fields)
+ See the index -- CRUD GOALS > Index
+ Update or delete using 'key' (hover over box and scroll down to bottom.)
+ To mark as complete, enter key and enter appropriate prescribed values
in form field in the update form.
+ You can get and update your goal using the edit toggle on the update form.

## LINKS
+ CLIENT: https://rishisurana13.github.io/goal-tracker-client/
+ BACK: https://damp-fjord-80252.herokuapp.com
+ BACK END REPO: https://rishisurana13.github.io/goal-tracker-client/
+ WIREFRAME: https://imgur.com/a/VzvP5aq
+ ERD:https://imgur.com/a/VNQTsJM
+ APP SCREENSHOT: https://imgur.com/a/xPHluxa

## Project idea
I wanted to be able to set long term goals and remember what they were and
objectively track their progress -- as opposed to writing them down on notes on
my phone, only to be forgotten a few hours later.

## User Stories
+ As a user, I want to CRUD my Goals
+ As a user, I want to track their progress
+ As a user, I want to mark them completed when I finish
+ As a user, I want to decide how important each goal is.

STRETCH
+ I want to break down my process into steps and apply weightage to each step
to determine my progress.
+ I want to see my progress graphically
## Technologies used
+ Node.js
+ Express.js
+ jQuery
+ AJAX
+ Bootstrap and CSS

## Process
+ Set up back end on express
+ Set up ALL front end elements in html
+ Set up Authorization system
+ Set up CRUD functions
+ Add functionality
+ Revise

# Routes
| Verb    | URI Pattern            | Controller#Action             |
|---------|------------------------|-------------------------------|
| POST    | `/sign-up`             | `users.post/sign-up`          |
| POST    | `/sign-in`             | `users.post/sign-in`          |
| PATCH   | `/change-password`     | `users.patch/change-password` |
| DELETE  | `/sign-out`            | `users.delete/sign-out`       |
| POST    | `/goals`               | `create`                      |
| GET     | `/goals`               | `goals#index`                 |
| GET     | `/goals/:id`           | `goals#show`                  |
| PATCH   | `/goals/:id`           | `goals#update`                |
| DELETE  | `/goals/:id`           | `goals#destroy`               |

# Preview
![Preview]
(https://imgur.com/a/xPHluxa.jpg)
