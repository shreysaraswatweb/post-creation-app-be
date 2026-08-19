import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault() //form submit pr page reload nhi hoga
    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      // alert("Post created successfully")
      // e.target.reset()//form reset
      console.log(res)
      navigate("/feed")
    })
    .catch((err) => { 
      console.log(err)
      alert("Error creating post")
    })
  }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" required />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost