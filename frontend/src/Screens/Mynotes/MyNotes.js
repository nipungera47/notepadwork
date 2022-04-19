import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Button, Card } from 'react-bootstrap'
import notes,{} from "../../data/notes"
const MyNotes = () => {
// const deleteHandler = () => {
//   if(window.confirm("Are you sure? "))
//   {   

//   }
// }


  return (
    <>
    <MainScreen title='Welcome back Nipun Gera'> 
     <Link to="/createnote">
      <Button style={{marginLeft:10, marginBottom:6}}  size = 'lg'>
        Create New Note
      </Button>
      </Link>

      {
        notes.map((note) =>(
          
          <Card style={{margin:10}}>
    <Card.Header style={{display:"flex"}}>
        <span
        style={{
          color:"black",
          textDecoration:"none",
          flex:1,
          cursor:"pointer",
          alignSelf:"center",
          fontSize:18,
        }}
        >   
            {note.title}
            
        </span>
        <div>
      <Button href={`/note/${note._id}`}>Edit</Button>
      {/* <Button variant="danger" onClick= {() => deleteHandler(note._id)}>Delete</Button> */}
    </div>
    </Card.Header>

    <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {note.content}
      </p>
      <footer className="blockquote-footer">
       Created on - date 
      </footer>
    </blockquote>
  </Card.Body>
</Card>
        )
        )
        } 
    </MainScreen>
    </>
  )
}

export default MyNotes