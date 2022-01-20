import { Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import FeedBackForm from './components/FeedBackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedBackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </>
  );
};

export default App;
