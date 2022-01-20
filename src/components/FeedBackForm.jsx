import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Button from '../layout/Button';
import Card from './../layout/Card';
import RatingSelect from './RatingSelect';

const FeedBackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const { addHandler, updateFeedback, feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };
      addHandler(newFeedBack);
      setText('');
      setBtnDisabled(true);

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedBack);
      } else {
        addHandler(newFeedBack);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        {/* @TODO - rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div>
          <input
            value={text}
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
          />
          <Button isDisabled={btnDisabled} type='submit'>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
