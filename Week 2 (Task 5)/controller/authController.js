import express from 'express'
import bcrypt from 'bcryptjs'
import User from "../model/userModel.js"
import _  from 'lodash'

export const signup = async (req, res) => {
    try{
      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).json({error : 'User already registered'});
  
      user = new User(_.pick(req.body, ['name', 'email', 'password', 'role']));
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();
  
      const token = user.generateAuthToken();
      res.header('Authorization', token).send(_.pick(user, ['_id', 'name', 'email']));
    }catch(err){
      res.send(err)
    }
  }
  
  export const login = async (req, res) => {
    try{
      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).json({error :'Invalid email or password'});
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(400).json({error : 'Invalid password'});
  
      const token = user.generateAuthToken();
      const userId = user._id;
      res.status(200).send({token, userId : userId.toString()});
    }catch(err){
      res.send(err)
    }
  }