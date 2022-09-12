import React, { useState } from 'react'

const Pagination = ({totalPosts, postsPerPage, changePage, currentPage}) => {
    let numbers = []
    for (let i = 1; i< Math.ceil(totalPosts/postsPerPage); i++){
        numbers.push(i)
    }

    const handleBack = () =>{
      changePage(currentPage - 1) 
    }

    const handleNext =()=>{
      changePage(currentPage + 1)
      
    }

  return (
    <div >
       <ul>
        <button disabled={currentPage === 1} onClick={handleBack}>Back</button>
        {numbers.map(i => (
          <li key={i} className='pageButtons' >
            <button onClick={() => changePage(i)}>
              {i}
            </button>
          </li>
        ))}
        <button disabled={currentPage === numbers.pop()}onClick={handleNext}>Next</button>
      </ul>
      
    </div>
  )
} 

export default Pagination