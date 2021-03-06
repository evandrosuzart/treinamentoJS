const express = require('express');
const routes = new express.Router();
const PostController = require('./controller/PostController');
const LikeController = require('./controller/LikeController');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

routes.post('/posts',upload.single('image'),PostController.store);
routes.get('/posts',PostController.index);
routes.post('/posts/:id/like',LikeController.store);

module.exports = routes;
