import { useState } from "react";
import { Link } from "react-router-dom";



export default function LoanCalculator() {
  const [subcategory, setSubcategory] = useState('');
  const [category, setCategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [loanEstimate, setLoanEstimate] = useState(null); // State to store the result

  const calculateLoan = () => {
    // Simple loan calculation example: (deposit * loanPeriod) / some factor
    if (!category || !deposit || !loanPeriod) {
      alert("Please fill in all fields");
      return;
    }
    
    const depositAmount = parseFloat(deposit);
    const period = parseInt(loanPeriod);
    
    // Just a sample calculation logic, you can adjust it based on your needs
    const estimatedLoan = (depositAmount * period) / 1000; // Example formula, replace with your logic

    // Setting the result in state
    setLoanEstimate(estimatedLoan);
  };

  return (
    <div>
      {/* Loan Calculator Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-semibold mb-6">Loan Calculator</h2>

          <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-md">
            <form onSubmit={(e) => { e.preventDefault(); calculateLoan(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Dropdown */}
                <div>
                  <label className="block text-gray-600">Loan Category</label>
                  <select
                    className="w-full p-3 border rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Home Construction">Home Construction</option>
                    <option value="Business Startup">Business Startup</option>
                    <option value="Education">Education</option>
                  </select>
                </div>

                {/* Subcategory Dropdown */}
                <div>
                  <label className="block text-gray-600">Loan Subcategory</label>
                  <select
                    className="w-full p-3 border rounded-md"
                    value={subcategory}
                    onChange={(e) => setSubcategory(e.target.value)}
                  >
                    <option value="">Select Subcategory</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Initial Deposit */}
                <div>
                  <label className="block text-gray-600">Initial Deposit</label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter deposit amount"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                  />
                </div>

                {/* Loan Period */}
                <div>
                  <label className="block text-gray-600">Loan Period (Months)</label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter loan period"
                    value={loanPeriod}
                    onChange={(e) => setLoanPeriod(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
              >
                Calculate Estimate
              </button>
            </form>
          </div>

          {/* Display Loan Estimate */}
          {loanEstimate !== null && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Loan Estimate</h3>
              <p className="text-lg">Your estimated loan amount is: ${loanEstimate.toFixed(2)}</p>
              <Link to={'../pages/LoanRequestForm.jsx'}>
              <button className="bg-primary px-4 py-2 rounded text-white">Aplay Loan</button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
