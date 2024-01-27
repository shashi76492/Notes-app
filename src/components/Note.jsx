import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { IoMdSave } from "react-icons/io";
import { useState } from "react";


const Note = ({ id, text, date, handleDelete, handleEdit }) => {

    const [editing , setEditing] = useState(false)
    const [editedText , setEditedText] = useState(text)

  const handleDeleteClick = () => {
    handleDelete(id)
  };

  const handleChange = (e) => {
    if(e.keyCode === 13 && !e.shiftKey){
      e.preventDefault()
      setEditedText(editedText + "\n")
    }
    setEditedText(e.target.value)
    
  }

  const handleEditClick = () => {
    setEditing(!editing)
    handleEdit(editedText , id)    
  }

  
  return (
    <>
      <div className="note">
      {
        editing 
        ?
        <textarea rows="8"
        cols="10"
        placeholder="Type to add a note... "
        onChange={handleChange}
        value={editedText}></textarea>
        :
        <span>{text}</span>
      }
        <div className="note-footer">
          <small>Date : {date} </small>
          {
            editing
            ?
            <IoMdSave onClick={handleEditClick} style={{cursor:"pointer"}} />
            :
            <AiFillEdit onClick={handleEditClick} style={{cursor:"pointer"}} />
          }
          <RiDeleteBin5Fill size={20} onClick={handleDeleteClick} />
        </div>
      </div>
    </>
  );
};

export default Note;
