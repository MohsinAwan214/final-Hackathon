import { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';

export default function WeddingLoanPage() {
  const [category, setCategory] = useState('Wedding');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [loanDetails, setLoanDetails] = useState(null);

  const subcategories = {
    Wedding: ['Valima', 'Jahez', 'Honeymoon'],
  };

  const loanPeriods = ['1 Year', '3 Years', '5 Years', '10 Years'];

  const handleCalculate = () => {
    // Simple loan calculation example, you can adjust this as needed
    const amount = parseFloat(deposit) || 0;
    const interestRate = 0.05; // 5% interest rate for demonstration
    const years = parseInt(loanPeriod.split(' ')[0]) || 1;

    const interest = amount * interestRate * years;
    const totalRepayment = amount + interest;

    setLoanDetails({
      amount,
      interest,
      totalRepayment,
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Typography variant="h4" className="text-center mb-6 font-semibold">Wedding Loan Calculator</Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Loan Category Selector */}
          <div>
            <FormControl fullWidth>
              <InputLabel>Loan Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Loan Category"
                disabled
              >
                <MenuItem value="Wedding">Wedding</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Loan Subcategory Selector */}
          <div>
            <FormControl fullWidth>
              <InputLabel>Loan Subcategory</InputLabel>
              <Select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                label="Loan Subcategory"
                required
              >
                <MenuItem value="">Select Subcategory</MenuItem>
                {subcategories[category]?.map((sub, idx) => (
                  <MenuItem key={idx} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Initial Deposit Input */}
        <div className="mb-6">
          <TextField
            label="Initial Deposit"
            variant="outlined"
            fullWidth
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            placeholder="Enter deposit amount"
            required
          />
        </div>

        {/* Loan Period Selector */}
        <div className="mb-6">
          <FormControl fullWidth>
            <InputLabel>Loan Period</InputLabel>
            <Select
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value)}
              label="Loan Period"
              required
            >
              <MenuItem value="">Select Period</MenuItem>
              {loanPeriods.map((period, idx) => (
                <MenuItem key={idx} value={period}>
                  {period}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Calculate Button */}
        <div className="text-center mb-6">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleCalculate}
            disabled={!subcategory || !deposit || !loanPeriod}
          >
            Calculate Loan Breakdown
          </Button>
        </div>

        {/* Loan Breakdown Results */}
        {loanDetails && (
          <div className="mt-6">
            <Typography variant="h6" className="text-center mb-4">Loan Breakdown</Typography>
            <table className="min-w-full table-auto border-collapse text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">Loan Amount</td>
                  <td className="py-2 px-4 border">${loanDetails.amount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Interest</td>
                  <td className="py-2 px-4 border">${loanDetails.interest.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border font-bold">Total Repayment</td>
                  <td className="py-2 px-4 border font-bold">${loanDetails.totalRepayment.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
