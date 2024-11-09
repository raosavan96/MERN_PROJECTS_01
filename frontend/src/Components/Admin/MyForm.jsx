import React, { useRef } from 'react';

const MyForm = () => {
  const formRef = useRef(); // Create a ref to access the form element

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(formRef.current); // Create FormData from the form

    // const myName = "Sawan Kumar Yadav"

    // Example of appending additional data
    formData.append('extraField', 'Extra Value');

  

    // Sending the form data via Fetch API
    fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>
     
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
