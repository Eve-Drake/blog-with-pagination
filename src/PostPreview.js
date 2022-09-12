import React from 'react'

const PostPreview = ({posts}) => {
  return (
    <div >
        {posts.map(post=>(
        <div className='post' key={post.id}>
          <p className='userId'>Author ID: {post.userId}</p>
          <h1 className='title'>{post.title}</h1>
          <p className='body'>{post.body}</p>
        </div>
        
        ))}
    </div>
  )
}

export default PostPreview