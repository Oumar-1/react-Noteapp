import React from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import Form from './Form';

export default function Edit({getCurrent , updateNote}) {
  const { editId } = useParams();
  const navigate = useNavigate()
  const current = getCurrent(editId);
  function endEdit(data) {
    updateNote({...data, id : editId})
    navigate(`/preview/${editId}` , {replace : true}) 
  }
  return (
    <Form
      initdata={{ title: current.title, content: current.content }}
      handleSubmit={endEdit}
    />
  );
}
