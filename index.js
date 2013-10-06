/**
 * connect-cache-control
 *
 * Connect middleware to prevent the browser
 * from caching the response.
 *
 * Copyright (c) Eric Elliott 2013
 *
 * MIT License
 *
 * Written for the book, 
 * "Programming JavaScript Applications"
 * (O'Reilly)
 */

'use strict';

var cacheControl = function cacheControl(req, res,
    next) {

  // Support old browsers
  res.setHeader('Expires', 0);

  // Support recent browsers
  res.setHeader('Cache-Control', 'no-store, ' +
    'no-cache, must-revalidate, max-age=0');

  // This isn't a standard response header,
  // but many browsers respect it.
  res.setHeader('Pragma', 'no-cache');

  next();
};

module.exports = cacheControl;
