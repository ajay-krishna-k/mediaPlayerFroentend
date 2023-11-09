import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteAvideo } from '../services/allAPI';


function Viewcard({ displayVideo, setDeletedVideoStatus, ispresent }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, embedLink } = displayVideo

    let today = new Date()
    console.log(today);
    let timestamp = new Intl.DateTimeFormat("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)
    console.log(timestamp);
    let videoDetails = {
      caption, embedLink, timestamp
    }
    await addHistory(videoDetails)

  }
  const removeVideo = async (id) => {
    const response = await deleteAvideo(id)
    setDeletedVideoStatus(true)
  }
  // function to drag video
  const cardDrag = (e, id) => {
    console.log(`The Id of the videoCard dragged is ${id}`);
    e.dataTransfer.setData("videoID", id)
  }




  return (
    <>
      <Card style={{ width: '18rem' }} className='p-3' draggable onDragStart={(e) => cardDrag(e, displayVideo?.id)}>
        <Card.Img variant="top" onClick={handleShow} src={displayVideo.url} style={{ height: "350px" }} />
        <Card.Body className='d-flex justify-space-between'>
          <Card.Title className='mt-3'>{displayVideo.caption}
            { 
            !ispresent &&
              <button onClick={() => removeVideo(displayVideo?.id)} class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
       }
        </Card.Title>
      </Card.Body>
     </Card >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="485" height="263" src={`${displayVideo.embedLink}?autoplay=1`} title="The 13 STRONGEST Swords In One Piece Ranked" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Ok</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Viewcard 