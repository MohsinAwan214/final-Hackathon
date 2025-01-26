import { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState('Applications');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const applications = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      loanAmount: 10000,
      loanCategory: 'Wedding',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Alice Smith',
      email: 'alice@example.com',
      loanAmount: 15000,
      loanCategory: 'Home Construction',
      status: 'Approved',
    },
    // Add more applications as needed
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const renderApplications = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Loan Applications</h2>
      <div className="flex justify-between mb-4">
        {/* Search Bar */}
        <div className="w-1/2">
          <TextField
            label="Search by Name or Email"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="w-1/3">
          <FormControl fullWidth>
            <InputLabel>Filter by City</InputLabel>
            <Select
              value={filter}
              onChange={handleFilterChange}
              label="Filter by City"
              fullWidth
            >
              <MenuItem value="">All Cities</MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Application Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Loan Amount</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications
              .filter((app) =>
                app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                app.email.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((app) => (
                <tr key={app.id}>
                  <td className="border py-2 px-4">{app.name}</td>
                  <td className="border py-2 px-4">{app.email}</td>
                  <td className="border py-2 px-4">${app.loanAmount}</td>
                  <td className="border py-2 px-4">{app.loanCategory}</td>
                  <td className="border py-2 px-4">{app.status}</td>
                  <td className="border py-2 px-4">
                    <Button variant="contained" color="primary">
                      View/Edit
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAppointmentScheduling = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Appointment Scheduling</h2>
      <div className="mb-4">
        <Button variant="contained" color="primary">
          View Available Slots
        </Button>
      </div>

      {/* Appointment Scheduling Form */}
      <div className="space-y-4">
        <div>
          <TextField label="User Name" variant="outlined" fullWidth />
        </div>
        <div>
          <TextField label="Date" variant="outlined" type="date" fullWidth />
        </div>
        <div>
          <TextField label="Time Slot" variant="outlined" fullWidth />
        </div>
        <Button variant="contained" color="secondary">
          Generate Token
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h1 className="text-xl font-semibold mb-6">Admin Panel</h1>
        <ul>
          <li
            onClick={() => setActiveSection('Applications')}
            className="cursor-pointer mb-4 hover:bg-gray-700 p-2 rounded"
          >
            Applications
          </li>
          <li
            onClick={() => setActiveSection('AppointmentScheduling')}
            className="cursor-pointer mb-4 hover:bg-gray-700 p-2 rounded"
          >
            Appointment Scheduling
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeSection === 'Applications' ? renderApplications() : renderAppointmentScheduling()}
      </div>
    </div>
  );
}
