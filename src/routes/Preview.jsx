import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useToggler from '../hooks/useToggler';

function NotePreview(props) {
  const navigate = useNavigate();
  const [optionsVisible, setOptionVisbility] = useToggler();
  const { noteId } = useParams();
  const current = props.getCurrent(noteId);

  if (current === undefined) {
    return <p>Cannot find This Note</p>;
  }

  function handleDelete() {
    props.removeNote(current.id);
    navigate('/');
  }

  return (
    <div className='note-preview'>
      <h2 className='title' dir={isRTL(current.title) ? 'rtl' : 'ltr'}>
        {current.title}
      </h2>

      <p className='content' dir={isRTL(current.content) ? 'rtl' : 'ltr'}>
        {current.content}
      </p>
      <div className='menu'>
        <div className='toggler' onClick={setOptionVisbility}>
          <svg
            height='25'
            viewBox='0 0 256 256'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='currentColor'
              d='M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28.1,28.1,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28.1,28.1,0,0,0,128,180Z'
            />
          </svg>
        </div>
        <div className={`options ${optionsVisible ? 'active' : ''}`}>
          <button className='edit' title='Edit [title, content]'>
            <Link to={`/edit/${current.id}`}>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3' />
                <path d='M9 14.996h3l8.5-8.5a2.121 2.121 0 0 0-3-3l-8.5 8.5v3Z' />
                <path d='m16 5 3 3' />
              </svg>
            </Link>
          </button>
          <button title='delete' className='delete' onClick={handleDelete}>
            <svg
              height='25'
              viewBox='0 1 30 30'
              xmlns='http://www.w3.org/2000/svg'
              strokeWidth={0}
              fill='currentColor'
            >
              <path d='M24 31H8a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0v19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 1 2 0v19a3 3 0 0 1-3 3Zm4-24H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2Zm-8 0a1 1 0 0 1-1-1V3h-6v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-4 19a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1Zm5-2a1 1 0 0 1-1-1V13a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Zm-10 0a1 1 0 0 1-1-1V13a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NotePreview;
function isRTL(s) {
  var ltrChars =
      'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' +
      '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
    rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
    rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');

  return rtlDirCheck.test(s);
}
