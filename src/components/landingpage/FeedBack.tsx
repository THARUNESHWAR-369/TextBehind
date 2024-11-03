'use client';

import { UserAuth } from '@/lib/firebase/context/AuthContext';
import { db } from '@/lib/firebase/firebaseConfig';
import { push, ref, set } from 'firebase/database';
import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const { user } = UserAuth();

  const handleSubmit = async (e  :any) => {
    e.preventDefault();

    try {
      // Save feedback in Firebase
      const feedbackRef = ref(db, "User-Feedback");
      const newDataRef = push(feedbackRef);
      await set(newDataRef, {
        feedback: feedback,
        rating: rating,
        date_created: new Date().toISOString(),
        uid: user.user.uid,
      });
      setSubmitted(true);
      setFeedback('');
      setRating(0);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="bg-gray-800 relative text-white p-6 rounded-lg shadow-md mt-10 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">We Value Your Feedback</h2>
      {submitted ? (
        <p className="text-green-500">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium mb-2">Rate your experience:</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-500'}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium mb-2">Your feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white resize-none"
              rows={4}
              placeholder="Share your thoughts with us..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
