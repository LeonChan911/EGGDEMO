
const Controller = require('egg').Controller;

class PostController extends Controller {
  async index() {
    let ujson = await  this.ctx.service.post.add();
    this.ctx.body =  ujson;
  }
  async find() {
    let ujson = await  this.ctx.service.post.find();
    this.ctx.body =  ujson;
  }

}


module.exports = PostController;
