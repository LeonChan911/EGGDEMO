'use strict';

const Service = require('egg').Service;
class PostService extends Service {
    // 插入post
    async add() {
        let uid = this.ctx.query.uid;
        let post_title = this.ctx.query.post_title;
        let post_content =this.ctx.query.post_content;
        const result = await this.ctx.model.Post.create({
            uid: uid,
            post_title:post_title,
            post_content:post_content
        });
        let obj = Object.assign(this.config.response, { data: {id:result._id,userName:result.userName} });
        return obj;
    }

    async find(){
        let pageindex = this.ctx.query.pageindex ? Number(this.ctx.query.pageindex):10000;
        let pagesize = this.ctx.query.pagesize ? Number(this.ctx.query.pagesize):0;
        let query = this.ctx.query.uid ? {uid:this.ctx.query.uid}:{}
        const result = await this.ctx.model.Post.find(query).sort({_id:-1}).limit(pagesize).skip(pageindex*pagesize)
        const count =await this.ctx.model.Post.count({});
        let newResult = [];
        result.map(val => {
            newResult.push({
                id: val._id,
                post_content: val.post_content,
                post_title: val.post_title
            })
        })
        let obj = Object.assign(this.config.response, { data: newResult ,count:count});
        return obj;
    }
   
}
module.exports = PostService;
