import { useState } from "react";
import "./feedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setSubmittedFeedback(formData);
      setFormData({ name: "", email: "", feedback: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="title">📢 Share Your Feedback</h2>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Name"
          />
          <label>Name</label>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="Email"
          />
          <label>Email</label>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="input-group">
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="input-field"
            placeholder="Your Feedback"
            rows="4"
          ></textarea>
          <label>Feedback</label>
          {errors.feedback && <p className="error-message">{errors.feedback}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedFeedback && (
        <div className="feedback-display">
          <h3>🎉 Thank You!</h3>
          <p><strong>Name:</strong> {submittedFeedback.name}</p>
          <p><strong>Email:</strong> {submittedFeedback.email}</p>
          <p><strong>Feedback:</strong> {submittedFeedback.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
