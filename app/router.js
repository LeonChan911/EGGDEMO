'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/user', controller.api.user.index);
  router.get('/api/userfind', controller.api.user.find);
  router.get('/api/userchange', controller.api.user.change);
  router.get('/api/userdelete',controller.api.user.delete)

  router.get('/api/post',controller.api.post.index)
  router.get('/api/postfind',controller.api.post.find)
};
