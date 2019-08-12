'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const relativeTime =  ctx.helper.relativeTime(1565528419);
    ctx.logger.info('时间：'+relativeTime)
    ctx.body = `<a>demo1${relativeTime}</a>`;
  }
}

module.exports = HomeController;
