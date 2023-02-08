import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation(props) {
  const notesEls = props.notes.map((note) => {
    return (
      <li key={note.id} >
        {' '}
        <NavLink title={note.title} to={`/preview/${note.id}`}>{note.title}</NavLink>{' '}
      </li>
    );
  });

  return (
    <nav className='nav'>
      <h1 className='header'>Notes!</h1>
      <button className='new-note'>
        <Link to={`/`}>Create Note </Link>
      </button>

      <ul className='notes'>{notesEls}</ul>
    </nav>
  );
}
export default Navigation;
