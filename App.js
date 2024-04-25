import React from 'react';
import DonationForm from './DonationForm'; // Assuming this is the correct path to DonationForm

const App = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Donation App</h1>

      <DonationForm />
    </div>
  );
};

export default App; // Export the App component

// Note: If you're defining App inline in index.js, remove this file and directly use the App component in index.js
