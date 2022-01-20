import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext({
  feedback: {},
  addHandler: () => {},
  removeHandler: () => {},
  editFeedback: () => {},
  updateFeedback: () => {},
});

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addHandler = (newFeed) => {
    newFeed.id = uuidv4();

    setFeedback((prevState) => [newFeed, ...prevState]);
  };

  // Delete Feedback
  const removeHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, upItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item)));
  };

  const feedbackData = {
    feedback,
    feedbackEdit,
    addHandler,
    removeHandler,
    editFeedback,
    updateFeedback,
  };

  return <FeedbackContext.Provider value={feedbackData}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
