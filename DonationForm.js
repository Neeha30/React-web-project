import React, { useState } from 'react';
import './Donation.css'; // Import CSS file


const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the donation data to a backend or handle as needed
    console.log('Donation Amount:', donationAmount);
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="donation-form">
      {isSubmitted ? (
        <p>Thank you for your donation!</p>
      ) : (
        <form onSubmit={handleSubmit}>
                <h2>Make a Donation</h2>

          <div className="form-group">
            <label htmlFor="donationAmount">Donation Amount</label>
            <input
              type="number"
              id="donationAmount"
              value={donationAmount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit">Donate Now</button>
        </form>
      )}
    </div>
  );
};

export default DonationForm;
