import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoanCategory() {


  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  
  const [subcategory, setSubcategory] = useState('');
const [category, setCategory] = useState('');

    return (
      <div>
<section className="container mx-auto my-12 px-4">
<h2 className="text-2xl font-semibold text-center mb-6">Loan Categories</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {['Wedding', 'Home Construction', 'Business Startup', 'Education'].map((loanCategory) => (
    <div
      key={loanCategory}
      className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
      onClick={() => setCategory(loanCategory)}
    >
      <h3 className="font-bold text-xl mb-4">{loanCategory} Loan</h3>
      <p className="text-gray-600 mb-4">Learn more about our {loanCategory} loan options.</p>
      <Link to={'../pages/WeddingLoanPage.jsx'}>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
        Learn More
      </button>
      
  </Link>
    </div>
  ))}
</div>
</section>

      </div>
    )
  }

