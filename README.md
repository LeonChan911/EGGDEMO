# eggdemo
制作了两个api
一.用户 增删改查（分页、模糊）

api/user?name=chenyin

api/userdelete?id=5c877b9c34b82f36faa024b2

api/userchange?name=cy&id=5c877915292c7f3592c4f0c0

api/userfind?pageindex=1&pagesize=10&query=c

二.帖子 增 查（根据uid、分页）
api/post?uid=5c877b6ea43f6a36d6ef53b9&post_title=帖子标题&post_content=帖子内容

api/postfind?uid=5c877b6ea43f6a36d6ef53b9&pageindex=1&pagesize=10


# egg 学习手册
https://eggjs.org/zh-cn/basics/objects.html

# 依赖mongoDB 
v4.0.3

#mongoDB 学习手册
http://www.runoob.com/mongodb/mongodb-tutorial.html
## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org