'use strict';

const Service = require('egg').Service;
class UserService extends Service {
    // 插入用户信息 带索引
    async add() {
        let name = this.ctx.query.name;
        const result = await this.ctx.model.User.create({
            userName: name,
        });
        let obj = Object.assign(this.config.response, { data: {id:result._id,userName:result.userName} });
        return obj;
    }
    // 查找用户信息 分页 模糊
    async find() {
        let pageindex = this.ctx.query.pageindex ? Number(this.ctx.query.pageindex):10000;
        let pagesize = this.ctx.query.pagesize ? Number(this.ctx.query.pagesize):0;
        let query = this.ctx.query.query ? {userName:new RegExp(this.ctx.query.query)}:{};
        const result = await this.ctx.model.User.find(query).sort({_id:-1}).limit(pagesize).skip(pageindex*pagesize)
        const count =await this.ctx.model.User.count({});
        let newResult = [];
        result.map(val => {
            newResult.push({
                id: val._id,
                userName: val.userName
            })
        })
        let obj = Object.assign(this.config.response, { data: newResult ,count:count});
        return obj;
    }
    // 修改用户信息
    async change() {
        let id = this.ctx.query.id;
        let name = this.ctx.query.name;
        const result = await this.ctx.model.User.findByIdAndUpdate(id,{
            userName:name
        })
        let obj = Object.assign(this.config.response, { data:  {id:id,name:name} });

        return obj;

    }
    //删除用户信息
    async delete(){
        let id =this.ctx.query.id;
        const result =await this.ctx.model.User.findByIdAndDelete(id);
        let obj = Object.assign(this.config.response, { data:  {} });
        return obj;
    }
}
module.exports = UserService;
