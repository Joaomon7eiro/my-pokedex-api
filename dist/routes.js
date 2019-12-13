"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const routes = _express.Router.call(void 0, );

routes.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

exports. default = routes;
