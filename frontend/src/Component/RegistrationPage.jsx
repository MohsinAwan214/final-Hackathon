import { useState } from 'react';

export default function RegistrationPage() {
  const [fullName, setFullName] = useState('');
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your backend via a POST request.
    // For now, we are just displaying a success message.

    console.log("Form submitted with:", { fullName, cnic, email });
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">User Registration</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">CNIC</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {isSubmitted && (
          <div className="mt-4 text-center text-green-600">
            <p>Registration successful! You can now log in.</p>
          </div>
        )}
      </div>
    </div>
  );
}
