import React, { useEffect, useState } from 'react'
import Viewcard from './Viewcard'
import { Col, Row } from 'react-bootstrap'
import { getAllvideos } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const [allVideo, setAllVideo] = useState([])

  const [deleteVideoStatus, setDeletedVideoStatus] =useState(false)

    const getAllUploadedVideo = async()=>{
      const response = await getAllvideos()
   /*   console.log(response); */
      const {data} = response 
     /*  console.log(data); */
      setAllVideo(data) 
    }
    console.log(allVideo);

    useEffect(()=>{
      getAllUploadedVideo()
      setDeletedVideoStatus(false)
    },[uploadVideoStatus, deleteVideoStatus])

  return (
    <div className='ms-2'>
        <h3>All Videos</h3>
         <Row>
           {
            allVideo.length>0? allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}><Viewcard displayVideo={video} setDeletedVideoStatus={setDeletedVideoStatus} /></Col>)):
             <p className='mt-5 fw-bolder fs-4 text-danger'>Nothing to display</p>
           }
          

        </Row> 
    </div>
  )
}

export default View;
