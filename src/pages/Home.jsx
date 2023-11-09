import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {

         const [uploadVideoStatus, setUploadVideoStatus] = useState({})

  return (
    <div>
      <div>
        <Add setUploadVideoStatus={setUploadVideoStatus} />
      </div>
      <div className='mt-5 d-flex justify-content-between'>
        
        <div className='allvideos col-lg-9'>
           
          <View uploadVideoStatus={uploadVideoStatus} />
          </div>
        <div className='category col-lg-3 mt-2'><Category/></div>
      </div>
    </div>
    
  )
}

export default Home