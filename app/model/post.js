'use strict'

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PostSchema = new Schema({
    uid: {
      type: String,
      unique: false,
      required: true,
    },
    post_title:{
      type: String,
      unique: false,
      required: true,
    },
    post_content:{
      type: String,
      unique: false,
      required: false,
    }
  });
  return mongoose.model('post', PostSchema);
};