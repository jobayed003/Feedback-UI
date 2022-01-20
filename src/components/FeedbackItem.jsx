import React, { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './../layout/Card';

const FeedbackItem = ({ id, item }) => {
  const { removeHandler, editFeedback } = useContext(FeedbackContext);

  const handleClick = () => {
    removeHandler(id);
  };
  const handleEdit = () => {
    editFeedback(item);
  };
  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={handleClick} className='close'>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={handleEdit}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
