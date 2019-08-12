/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552376712580_7359';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.mongoose = {
    url: 'mongodb://localhost:27017/test',
    options: {},
  };
  config.response = {
    code:0,
    msg:'',
    data:null
  }
  return {
    ...config,
    ...userConfig,
    middleware: [ 'errorHandler' ],
    errorHandler: {
      match: '/',
    }
  };
};
