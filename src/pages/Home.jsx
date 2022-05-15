import { useState } from 'react';
import FeedbackModal from '../components/FeedbackModal/FeedbackModal';
import Card from './../components/Card/Card';
const Home = () => {
  const BUTTON_STYLE = {
    all: 'unset',
    backgroundColor: '#8D8DAA',
    padding: '6px',
    marginTop: '1px',
    marginLeft: '230px',
    color: 'white',
    boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
    borderRadius: '2px',
    cursor: 'pointer',
  };
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Camera</h1>
      <Card />
      <button style={BUTTON_STYLE} onClick={() => setOpenModal(true)}>
        Feedback
      </button>
      {openModal && <FeedbackModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
};
export default Home;
