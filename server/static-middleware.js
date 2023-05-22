const path = require('path');
const express = require('express');

const publicPath = '../public/';
const staticMiddlware = express.static(publicPath);

module.exports = staticMiddlware;
