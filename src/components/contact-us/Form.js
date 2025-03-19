import React, { useState } from 'react';
import styles from '../contact-us/Form.module.css'; 

function Form() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({}); 

  function validateForm() {
    const newErrors = {};
    if (fullName.length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long';
    }
    if (subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email must be a valid email address';
    }
    if (body.length < 3) {
      newErrors.body = 'Message must be at least 3 characters long';
    }
    return newErrors;
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const formData = {
        fullName,
        subject,
        email,
        body,
      };
      console.log(formData);

      alert('Thank you! We will contact you within a week.');
    }
  }

  function onFullNameChange(event) {
    setFullName(event.target.value);
  }
  function onSubjectChange(event) {
    setSubject(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onBodyChange(event) {
    setBody(event.target.value);
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Contact Us</h1>
      <form onSubmit={onFormSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="full-name" className={styles.formLabel}>Full name</label>
          <input
            id="full-name"
            name="full-name"
            value={fullName}
            placeholder="Your full name"
            onChange={onFullNameChange}
            className={styles.formInput}
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.formLabel}>Subject</label>
          <input
            id="subject"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={onSubjectChange}
            className={styles.formInput}
          />
          {errors.subject && <p className={styles.error}>{errors.subject}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input
            id="email"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={onEmailChange}
            className={styles.formInput}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.formLabel}>Message</label>
          <textarea
            id="body"
            name="body"
            value={body}
            placeholder="Your message"
            onChange={onBodyChange}
            className={styles.formTextarea}
          />
          {errors.body && <p className={styles.error}>{errors.body}</p>}
        </div>
        <button type="submit" className={styles.formButton}>Submit</button>
      </form>
    </div>
  );
}

export default Form;