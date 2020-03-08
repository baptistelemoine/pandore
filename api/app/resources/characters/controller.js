/**
 * Module dependencies
 */
const qs = require('querystring');
const fetch = require('isomorphic-unfetch');

const handleRequest = async (ctx, query, id) => {
  const { config, helpers } = ctx;
  const ts = new Date().getTime();
  const hash = helpers.utils.hash(ts, config);
  const params = qs.stringify({ hash, apikey: config.publicKey, ts, ...query });
  try {
    const apiResponse = await fetch(
      `${config.marvelApi}/characters${id ? `/${id}` : ``}?${params}`
    );
    if (apiResponse.status !== 200) {
      ctx.status = apiResponse.status;
    }
    ctx.body = await apiResponse.json();
  } catch (error) {
    ctx.throw(error);
  }
};

/**
 * Get all characters
 */
exports.getAll = async ctx => {
  const { query } = ctx;
  await handleRequest(ctx, query);
};

/**
 * Get one character
 */
exports.getOne = async ctx => {
  const {
    params: { id }
  } = ctx;
  await handleRequest(ctx, {}, id);
};
