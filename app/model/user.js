'use strict'

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    userName: {
      type: String,
      unique: false,
      required: true,
    }
  });
  return mongoose.model('User', UserSchema);
};