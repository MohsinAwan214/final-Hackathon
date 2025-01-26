import { useState } from 'react';

export default function LoanRequestForm() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    cnic: '',
    address: '',
  });

  const [guarantor1, setGuarantor1] = useState({
    name: '',
    email: '',
    cnic: '',
    location: '',
  });

  const [guarantor2, setGuarantor2] = useState({
    name: '',
    email: '',
    cnic: '',
    location: '',
  });

  const [loanDetails, setLoanDetails] = useState({
    category: '',
    subcategory: '',
    amount: 10000, // This could be pre-filled from calculator
  });

  const [documents, setDocuments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle form submission, e.g., send data to the backend
    console.log("Loan request submitted:", {
      userInfo,
      guarantor1,
      guarantor2,
      loanDetails,
      documents,
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Loan Request Form</h2>

        <form onSubmit={handleSubmit}>
          {/* User Information Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">User Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your full name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your phone number"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600">CNIC</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your CNIC"
                  value={userInfo.cnic}
                  onChange={(e) => setUserInfo({ ...userInfo, cnic: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-600">Address</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your address"
                  value={userInfo.address}
                  onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Guarantor Information Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Guarantor Information</h3>

            {/* Guarantor 1 */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Guarantor 1</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's full name"
                    value={guarantor1.name}
                    onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's email"
                    value={guarantor1.email}
                    onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">CNIC</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's CNIC"
                    value={guarantor1.cnic}
                    onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Location</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's location"
                    value={guarantor1.location}
                    onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Guarantor 2 */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Guarantor 2</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's full name"
                    value={guarantor2.name}
                    onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's email"
                    value={guarantor2.email}
                    onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">CNIC</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's CNIC"
                    value={guarantor2.cnic}
                    onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Location</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter guarantor's location"
                    value={guarantor2.location}
                    onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Loan Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Loan Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">Loan Category</label>
                <select
                  className="w-full p-3 border rounded-md"
                  value={loanDetails.category}
                  onChange={(e) => setLoanDetails({ ...loanDetails, category: e.target.value })}
                >
                  <option value="">Select Category</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Home Construction">Home Construction</option>
                  <option value="Business Startup">Business Startup</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600">Loan Subcategory</label>
                <select
                  className="w-full p-3 border rounded-md"
                  value={loanDetails.subcategory}
                  onChange={(e) => setLoanDetails({ ...loanDetails, subcategory: e.target.value })}
                >
                  <option value="">Select Subcategory</option>
                  <option value="General">General</option>
                  {/* Add more options if needed */}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-600">Loan Amount</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-md"
                  value={loanDetails.amount}
                  onChange={(e) => setLoanDetails({ ...loanDetails, amount: e.target.value })}
                  disabled // You can enable this if the amount is editable
                />
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="mb-6">
            <label className="block text-gray-600">Additional Documents (Optional)</label>
            <input
              type="file"
              className="w-full p-3 border rounded-md"
              onChange={(e) => setDocuments(e.target.files[0])}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
            >
              Submit Loan Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
