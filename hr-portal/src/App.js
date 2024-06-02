
import react from 'react';
import sidebar from './sidebar.js';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <div className="header bg-gray-100 p-4 flex justify-between items-center">
          <div className="logo flex items-center">
            <svg viewBox="0 0 24 24" className="icon w-8 h-8 text-gray-600 mr-2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
            <span className="text-xl font-bold">Career Coaches</span>
          </div>
          <div className="search flex items-center bg-white p-2 rounded shadow">
            <svg viewBox="0 0 24 24" className="icon w-5 h-5 text-gray-600 mr-2">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7 14 5 11.67 5 9.5S7 5 9.5 5 14 7 14 9.5 11.67 14 9.5 14z" />
            </svg>
            <input type="text" placeholder="Search anything" className="outline-none" />
          </div>
          <div className="actions">
            <button className="button bg-blue-500 text-white p-2 rounded shadow">+</button>
          </div>
        </div>
        <div className="content p-4">
          {}
        </div>
        <div className="footer bg-gray-100 p-4 flex justify-between items-center">
          <div className="links flex space-x-4">
            <a href="#" className="link text-gray-600 hover:text-gray-800">Payslip</a>
            <a href="#" className="link text-gray-600 hover:text-gray-800">Report</a>
          </div>
          <div className="notifications flex space-x-4">
            <svg viewBox="0 0 24 24" className="icon w-6 h-6 text-gray-600">
              <path d="M20 8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-1 12H5V10h14v10z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
            <svg viewBox="0 0 24 24" className="icon w-6 h-6 text-gray-600">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-14v-6c0-1.1-.9-2-2-2h-4c0 1.1.9 2 2 2v6h4z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </div>
          <div className="profile">
            <img src="https://picsum.photos/200/200" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
