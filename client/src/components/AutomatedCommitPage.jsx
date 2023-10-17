import React ,{ useEffect }from 'react';

import { Link, useNavigate } from 'react-router-dom';

const AutomatedCommitPage = () => {
    const navigate = useNavigate();

    
      const stopCommit = async () => {
        try {
          const response = await fetch('http://localhost:3000/user/stop_commit', {
            method: 'GET',
          });
  
          if (response.ok) {
            console.log('Commit stopped successfully');
            navigate('/'); // Redirect to Commit Form
          } else {
            console.error('Stop Commit failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      
    
  
    return (
      <div className="container text-center mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Automated Commit</h2>
            <p>Your automated commit has started.</p>
            <button onClick={stopCommit} className="btn btn-danger">Stop Commit</button>
            <Link to="/" className="btn btn-primary mt-3">
              Back to Commit Form
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AutomatedCommitPage;