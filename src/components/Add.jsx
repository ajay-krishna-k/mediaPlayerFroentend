import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';

function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Videos, setVideos] = useState({
    id: " ",
    caption: " ",
    url: "",
    embedLink: ""
  })
  console.log(Videos);

  const embedVideoLink = (e) => {
    const { value } = e.target
    console.log(value.slice(-11));
    const y_link = `https://www.youtube.come/embed/${value.slice(-11)}`
    setVideos({ ...Videos, embedLink: y_link })
  }

  const handleUpload = async () => {
    const { id, caption, url, embedLink } = Videos
    if (!id || !caption || !url || !embedLink) {
      alert('Please fill your form')
    }
    else {
      const response = await uploadVideo(Videos)
      console.log(response);
      if (response.status>= 200 && response.status <= 300) {

        setUploadVideoStatus(response.data)

        alert('Upload successfully')
        //close modal
        handleClose()
      }
      else {
    console.log(response);
    alert('Something went wrong. Try again later')
  }
}

}


return (
  <div className='d-flex justify-content-between mt-3'>
    <div className='d-flex ms-5 text-dark'>
      <h5 className='mt-4'>Upload new video</h5>
      <button onClick={handleShow} type="button" class="btn btn-light ms-3" style={{ backgroundColor: "transparent", border: 'none' }}><i class="fa-solid fa-cloud-arrow-up fa-2x"></i></button>
    </div>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title><i class="fa-solid fa-film text-warning"></i>Upload Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='borderborder-secondary p-3 rounded '>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter video ID" onChange={(e) => setVideos({ ...Videos, id: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter video caption" onChange={(e) => setVideos({ ...Videos, caption: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter video image URK" onChange={(e) => setVideos({ ...Videos, url: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter VIDEO youtube link" onChange={(e)=>embedVideoLink(e)} />
          </Form.Group>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleUpload} variant="primary">Upload</Button>
      </Modal.Footer>
    </Modal>
    <div className='mt-4 me-5'>
      <Link to={'/watch-history'} style={{ textDecoration: 'none', color: "black" }}>Watch History</Link>
    </div>


  </div>
)
}

export default Add