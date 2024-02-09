import { useEffect, useState } from "react";
import Notes from "./Notes";
import { nanoid } from "nanoid";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

function Home({ user }) {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

  const localStorageKey = `${user.name}`;

  const getLocalStorage = () => {
    const data = localStorage.getItem(localStorageKey);

    if (data) {
      return JSON.parse(localStorage.getItem(localStorageKey));
    } else {
      return [];
    }
  };

  const [notes, setNotes] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (inputId) => {
    const updatedArray = notes.filter((note) => note.id !== inputId);
    setNotes(updatedArray);
  };

  const handleEdit = (editedText, id) => {
    const updatedArray = notes.filter((note) => {
      if (note.id === id) {
        note.text = editedText;
        return note;
      } else {
        return note;
      }
    });
    setNotes(updatedArray);
  };

  const addNote = (inputText) => {
    setNotes([
      ...notes,
      {
        id: nanoid(),
        text: inputText,
        date: formattedDate,
      },
    ]);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Notes
          notes={notes}
          handleAddNote={addNote}
          handleDelete={deleteNote}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default Home;
