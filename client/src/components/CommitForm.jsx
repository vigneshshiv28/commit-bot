import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function CommitForm(){
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      owner,
      repo,
      token,
    };

    try {
      const response = await fetch('https://commit-bot-p7nz.vercel.app/user/commit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Commit successful');
        navigate('/automated-commit');
      } else {
        console.error('Commit failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container ">
      <div className="d-flex align-items-center justify-content-center min-vh-100 ">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Commit Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="owner" className="form-label">
                    Repository Owner
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="owner"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="repo" className="form-label">
                    Repository Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="repo"
                    value={repo}
                    onChange={(e) => setRepo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="token" className="form-label">
                    Token
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Commit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
