import { useState } from 'react';
import styles from './Form.module.css';
const Form = () => {
  const [rating, setRating] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const ratingChangeHandler = (e) => {
    setRating(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const isFormValid = () => {
    //specific validation

    if (!name.trim()) {
      setErrorMsg('Please Enter name');
      return false;
    } else if (name.trim().length <= 2) {
      setErrorMsg('Name must be greater than 2 characters');
      return false;
    } else if (name.trim().length > 15) {
      setErrorMsg('Name must be less than 15 characters');
      return false;
    }
    return true;
  };

  const submitHandler = () => {
    if (!isFormValid()) {
      return;
    }

    if (!(rating && name && comment)) {
      setErrorMsg('Please Enter All fields');
      return;
    }
    setErrorMsg('');
    const obj = {
      author: name,
      rating: rating,
      comment: comment,
    };
    alert(JSON.stringify(obj));
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.dropdown}>
          <label htmlFor="ratings">Rating</label>
          <input
            list="ratings"
            placeholder="Please Select Rating"
            value={rating}
            onChange={ratingChangeHandler}
          />
          <datalist id="ratings">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
          </datalist>
        </div>
        <div className={styles.nameInput}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className={styles.comment}>
          <label htmlFor="textarea">Comment</label>
          <textarea
            id="textarea"
            rows="8"
            cols="10"
            value={comment}
            onChange={commentChangeHandler}
          ></textarea>
        </div>
        <div>
          <button onClick={submitHandler}>Submit</button>
        </div>
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
};

export default Form;
