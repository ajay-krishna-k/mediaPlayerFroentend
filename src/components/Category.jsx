import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addAllCategories, deleteCategory, getAllCategory, getAvideo, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import Viewcard from './Viewcard';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")
  const [category, setCategory] = useState([])
  //function to add category
  const addCategory = async()=>{
    console.log(categoryName);

   if(categoryName){
    let body = {
      categoryName,
      allvideos:[]
    }
    //api call
    const response = await addAllCategories(body)
    console.log(response);
    if(response.status>=200 && response.status<=300){
      //state value is made null
      setCategoryName("")
      //close the modal
      handleClose()
      //to get the category
      allCategory()
    }
    else{
      alert('Something went wrong. Please Try Later')
    }
   }
   else{
    alert('Please Enter Category Name')
   }

  }

  //function to get all category
  const allCategory = async()=>{
    const {data} = await getAllCategory()
    // console.log(data);
    setCategory(data)
  }
  console.log(category);


  //function to delete category
  const deleteACategory = async(id)=>{
    await deleteCategory(id)


    //to get the remaining category
    allCategory()
  }
  //function to prevent reload so that the data we sent wont lost
  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e, categoryId)=>{
    console.log(`Dropped on the category id :${categoryId}`);
    //to get the data sent from videoCard
    const videoId = e.dataTransfer.getData("videoID")
    console.log(videoId);
    const {data} = await getAvideo(videoId)
    console.log(data);
    const selectedCategory = category.find(item=>item.id===categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)
    allCategory()

  }

    useEffect(()=>{
      allCategory()
    },[])



  return (
   <div>
        <div>
            <button onClick={handleShow} style={{backgroundColor:"orange",width:"200px", height:"30px",borderRadius:'6px' }}>Add New Category</button>
        </div>

        {category?.length>0?
        category?.map((item)=>(
          <div className="mt-5 border border-secondary p-3 rounded">
          <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <h5>{item.categoryName}</h5>
            <button onClick={()=>deleteACategory(item?.id)} className='btn btn-warning' > <i class="fa-solid fa-trash-can"></i> </button>
          </div>

           <Row>
            <Col>
           { item?.allvideos.length > 0?
           item?.allvideos?.map(card=>( <Viewcard displayVideo={card} ispresent={true}/> ))
             : <p>Nothing to display</p>}
            </Col>
           </Row>

        </div>)): <p className='m-3 fw-bolder fs-5 text-danger' >No category</p>
        }

         <Modal
         show={show}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
       >
         <Modal.Header closeButton>
           <Modal.Title><i class="fa-solid fa-film text-warning"></i>Upload Category</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <form className='borderborder-secondary p-3 rounded '>
       
       <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
         <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setCategoryName(e.target.value)} />
       </Form.Group>
      
    
          </form>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Cancel
           </Button>
           <Button onClick={addCategory} variant="primary">Add</Button>
         </Modal.Footer>
       </Modal>
   </div>
  )
}

export default Category