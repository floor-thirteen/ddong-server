const express = require('express');
const fs = require('fs');

module.exports = app => fs
  .readdirSync(`${__dirname}/api`)
  .filter(file =>
    file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .map(file =>
    file.substr(0, file.length - 3))
  .map(module => ({
    controller: require(`./api/${module}`),
    module
  }))
  .forEach(c =>
    app.use(`/api/1/${c.module}`, c.controller));