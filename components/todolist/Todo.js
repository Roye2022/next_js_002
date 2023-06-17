import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  function confirmDeleteHandler() {
    props.onDeleteTodo(props.index);
    setShowModal(false);
  }

  function handleDragStart(e) {
    props.onDragStart(e, props.index);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    props.onDrop(e, props.index);
  }

  return (
    <div
      className={`card card-${props.index}`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <Modal
          text='Are you sure?'
          onClose={closeModalHandler}
          onConfirm={confirmDeleteHandler}
        />
      )}
    </div>
  );
}

export default Todo;
