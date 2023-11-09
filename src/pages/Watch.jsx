import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteVideoHistory, getHistory } from '../services/allAPI';



function Watch() {
  const [history,setHistory]= useState([])
  const navi=useNavigate()
  const allHistory = async()=>{
    const {data} = await getHistory()
    // console.log(data);
    setHistory(data)
  }
  console.log(history);
//function to remove history
const removeHistory = async(id)=>{
  await deleteVideoHistory(id)
  //to get remaining history
  allHistory()
}


  useEffect(()=>{
    allHistory()
  },[])
  return (
    <div className='container w-100 mt-3'>
      <div className='d-flex justify-content-between'>
        <h1>Watch History</h1>
        <h4 onClick={()=>navi('/home')}><i class="fa-solid fa-arrow-left "></i> Back To Home</h4>
      </div>
        
        <Table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {history?.length>0?
        history?.map((item,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={`${item.embedLink}?autoplay=1`} target='_blank'> {item.embedLink}</a> </td>
          <td>{item.timestamp}</td>
          <td><button onClick={()=>removeHistory(item?.id)} class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        ))

          
        : <p className='mt-5 fw-bolder fs-4 text-danger'>No watch history</p>
    }
        
      </tbody>
    </Table>
        
    

    </div>
  )
}

export default Watch