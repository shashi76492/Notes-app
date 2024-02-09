import Note from "./Note";
import AddComponent from "./AddComponent";
import AddNote from "./AddNote";
import { useState } from "react";

const Notes = ({ notes, handleAddNote, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="Notes">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <AddNote handleAddNote={handleAddNote} />
    </>
  );
};

export default Notes;
