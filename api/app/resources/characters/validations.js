/**
 * Module dependencies
 */

const joi = require('joi');
const compose = require('koa-compose');
const joiValidate = require('@sigfox/koa-joi-validate');

/**
 * Get one code validation
 * Make sure url character id is in url
 */
exports.getOne = compose([
  joiValidate({
    params: joi.object().keys({
      id: joi
        .string()
        .min(1)
        .required()
    })
  })
]);
