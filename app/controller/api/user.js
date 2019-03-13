
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    let ujson = await  this.ctx.service.user.add();
    this.ctx.body =  ujson;
  }
  async find() {
    let ujson = await  this.ctx.service.user.find();
    this.ctx.body =  ujson;
  }
  async change(){
    let ujson =await this.ctx.service.user.change();
    this.ctx.body =  ujson;
  }
  async delete(){
    let ujson =await this.ctx.service.user.delete();
    this.ctx.body =  ujson;
  }
}


module.exports = UserController;
