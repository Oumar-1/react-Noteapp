import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { nanoid } from 'nanoid';

export default function CreateNote(props) {
  const navigate = useNavigate();

  function handleSubmit(data) {
    props.addNewNote(data);
    navigate(`/preview/${data.id}`);
  }

  return <Form initdata={emptyNote()}handleSubmit={handleSubmit}/>;
}
function emptyNote() {
  return {
    title: '',
    content: '',
    id: nanoid(),
  };
}
