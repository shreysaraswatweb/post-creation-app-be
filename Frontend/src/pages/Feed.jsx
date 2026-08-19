import axios from 'axios';
import React, {useState, useEffect} from 'react'
const Feed = () => {
  
  const [posts, setPosts ] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/get-posts")
    .then((res)=>{setPosts(res.data.posts)})
  }, [])

return (
    <section className='feed-sections'>
      {
        posts.length > 0 ? (
          posts.map ((post)=> (
            <div key={posts._id} className='post-card'>
              <img src={post.image} alt={post.caption}/>
              <p>{post.caption}</p>
            </div>
          ))
        ):(
          <h1>No Posts available</h1>
        )
      }
    </section>
  )
}

export default Feed;