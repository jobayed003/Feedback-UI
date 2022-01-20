import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext({
  feedback: {},
  addHandler: () => {},
  removeHandler: () => {},
  editFeedback: () => {},
  updateFeedback: () => {},
});

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fechFeedbackData();
  }, []);

  // Fetch Feedback
  const fechFeedbackData = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc');
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback
  const addHandler = async (newFeed) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      body: JSON.stringify(newFeed),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    // Why weird behaviour?
    // setFeedback((prevState) => [data, ...prevState]);

    setFeedback([data, ...feedback]);
  };

  // Delete Feedback
  const removeHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Edit Feedback

  const updateFeedback = async (id, upItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'applicaton/json',
      },
      body: JSON.stringify(upItem),
    });
    console.log(upItem);
    const data = await res.json();

    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
  };

  // Set item to be updated
  const editFeedback = (item) => {
    console.log(item);
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const feedbackData = {
    feedback,
    feedbackEdit,
    isLoading,
    addHandler,
    removeHandler,
    editFeedback,
    updateFeedback,
  };

  return <FeedbackContext.Provider value={feedbackData}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
