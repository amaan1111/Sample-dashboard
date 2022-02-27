import React from 'react'
import './students.css'
import {BsPlusSquare} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
function Students() {
    const data = [
        {
        id: 1, 
        image: 'https://picsum.photos/200/300?random=1' 
          },
        {
        id: 2, 
        image: 'https://picsum.photos/200/300?random=3'
        },
        {
          id: 3, 
          image:'https://picsum.photos/200/300?random=5'
        },
        {
            id: 4, 
            image: 'https://picsum.photos/200/300?random=7', 
        },
        {
            id: 5, 
            image: 'https://picsum.photos/200/300?random=8',
        },
        {
            id: 6, 
            image: 'https://picsum.photos/200/300?random=9',
        },
        {
            id: 7, 
            image: 'https://picsum.photos/200/300?random=13',
        },
        {
            id: 8, 
            image: 'https://picsum.photos/200/300?random=14', 
        },
        {
            id: 9, 
            image: 'https://picsum.photos/200/300?random=12',
        },
        {
            id: 10, 
            image: 'https://picsum.photos/200/300?random=15', 
        }
    ]
    const data2=[
        {
        id: 1, 
        image2: 'https://picsum.photos/200/300?random=2' 
          },
        {
        id: 2, 
        image2: 'https://picsum.photos/200/300?random=4' 
        },
        {
          id: 3, 
          image2: 'https://picsum.photos/200/300?random=6' 
        },
        {
            id: 4, 
            image2: 'https://picsum.photos/200/300?random=10' 
        },
        {
            id: 5, 
            image2: 'https://picsum.photos/200/300?random=9' 
        },
        {
            id: 6,
            image2: 'https://picsum.photos/200/300?random=11' 
        }
    ]
  return (
    <div className='container'>
        <p id='dot__1'></p>
        <p id='dot__2'></p>
        <p id='dot__3'></p>
        <img src="https://picsum.photos/200/300" alt="" id='img__pfp'/>
        <p id='p__name'>James Wanner</p>
        <p id='p__role'>Trainer</p>
        <div className='container__profiles'>
            <h1><BsPlusSquare className='logo__1'/>&nbsp;&nbsp;Students</h1>
            {
          data.map(({id, image})=>{
            return(
                <>
                <img src={image} alt='' id='img__pfps' />
                </>
            )
          })
        } 
            <input type="text" name="" id="s__bar" placeholder='Search students ' /><BiSearch className='input__s'/>
        </div>
        {
          data2.map(({id,image2})=>{
            return(
                <>
                <img src={image2} alt='' id='img__content' />
                </>
            )
          })
        }
    </div>
  )
}

export default Students