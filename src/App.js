import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Pagination';
import PostPreview from './PostPreview';


function App() {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;
  
  useEffect(()=>{
    getPosts();
  },[])

  const getPosts = async () =>{
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp =>{
      setPosts(resp.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }


  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex)


  const changePage =(pageNumber)=>{
    setCurrentPage(pageNumber);    
  }


  return (
    <div className="App">
      <h1>Posts</h1>
      <PostPreview posts={currentPosts}/>

      <Pagination 
        totalPosts={posts.length} 
        postsPerPage={postsPerPage} 
        changePage={changePage}
        currentPage={currentPage}/>
    </div>
  );
}

export default App;
