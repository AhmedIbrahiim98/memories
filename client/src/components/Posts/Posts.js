import React from 'react'

import { useSelector } from 'react-redux';

import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
  const posta = useSelector((state) => state.Posts);
  const classes = useStyles();

  console.log( posta );

  return (
    <div>
        <h1>Posts</h1>
        <Post />
        <Post />
    </div>
  )
}

export default Posts