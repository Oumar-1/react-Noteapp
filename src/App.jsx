import React, { useEffect, useState } from 'react';
import './sass/index.scss';

import { Route, Routes, Link } from 'react-router-dom';

import Navigation from './routes/Navigation';
import CreateNote from './routes/New';
import Preview from './routes/Preview';
import Edit from './routes/Edit';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  function addNote(obj) {
    const checkEmpty = (item, val) =>
      obj[item].trim() === '' ? val : obj[item];
    obj.title = checkEmpty('title', 'untitle');
    obj.content = checkEmpty('content', 'Null');
    setNotes((prevNotes) => [obj].concat(prevNotes));
  }

  function removeNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function updateNote(data) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === data.id ? data : note))
    );
  }

  function getCurrent(id) {
    return notes.find((note) => note.id === id);
  }

  useEffect(() => {
    const data = JSON.stringify(notes);
    localStorage.setItem('notes', data);
  }, [notes]);

  return (
    <div className='app'>
      <Navigation notes={notes} />

      <main>
        <Routes>
          <Route index element={<CreateNote addNewNote={addNote} />} />
          <Route
            path='/preview/:noteId'
            element={
              <Preview
                notes={notes}
                getCurrent={getCurrent}
                removeNote={removeNote}
              />
            }
          />
          <Route
            path='/edit/:editId'
            element={
              <Edit
                getCurrent={getCurrent}
                updateNote={updateNote}
                notes={notes}
              />
            }
          />

          <Route path='*' element={<h1> This Page is undefined </h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
