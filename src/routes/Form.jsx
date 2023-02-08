import React, { useState } from 'react';

export default function Form({ initdata, handleSubmit }) {
  const [data, setData] = useState(initdata);
  const titleLength = 70
  function collectData(event) {

    const target = event.target;
    setData((prevData) => ({ ...prevData, [target.name]: target.value }));
  }
  function onSubmit(event) {
    event.preventDefault();
    data.title = data.title.slice(0, titleLength)
    handleSubmit(data);
  }
  return (
    <form onSubmit={onSubmit} method='post'>
      <label> Title </label>
      <input
        onChange={collectData}
        type='text'
        value={data.title}
        name='title'
        maxLength={titleLength}
        placeholder='Subject'
      />

      <label>Content</label>
      <textarea
        onChange={collectData}
        value={data.content}
        name='content'
        placeholder='Type Something!'
      />

      <button className='btn'>Save</button>
    </form>
  );
}
