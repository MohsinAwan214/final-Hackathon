
import { useState } from 'react';

import LoanCategory from '../Component/LoanCategory'
import LoanCalculator from '../Component/LoanCalculator'


// import AdminPanel from '../Component/AdminPanel';




function Home() {


  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  
  const [subcategory, setSubcategory] = useState('');


  return (
    <div className="font-sans bg-gray-100 text-gray-800">
    
    
    <LoanCategory  />
    <LoanCalculator  />
    
  
    {/* <AdminPanel  /> */}
  
      
    
      
    </div>
  );
}

export default Home;
