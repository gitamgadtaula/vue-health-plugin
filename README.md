# vue-plugin

## Project setup
# Using the Package

Since now have our package published, Let’s take a look at how we can use this package in other repositories

To Install

npm install --save vue-health-plugin

Once you have installed the package, in your entry file of the repository (main.js) if you are using it in a Vue CLI project. Write the import command

import HealthPlugin from 'vue-health-plugin'

To install it globally.

Vue.use(HealthPlugin)

If not globally, you can also import the individual components locally.

import HealthPlugin from 'vue-health-plugin'
