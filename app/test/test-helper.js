process.env.NODE_ENV = 'test'

global.__server = __dirname + '/../server'
global.__client = __dirname + '/../client'


// Assertions

var chai = require('chai')
global.expect = chai.expect


// Helper Functions

global.TestHelper = {}

var express = require('express')

TestHelper.createApp = function (loader) {
  var app = express()
  app.use(require('body-parser').json())

  app.testReady = function () {
    // Log all errors
    app.use(function (err, req, res, next) {
      console.error("==Error==")
      console.error("   " + err.stack)
      next(err)
    })
  }
  return app
}
