const express = require('express');
const app = express();
const { Octokit } = require('@octokit/rest');
const config = require('../config.json');

app.use(express.json());

let commitInterval;

  async function commit(req, res ) {
    try {
        if(!commitInterval){
            const owner = req.body.owner;
    const repo = req.body.repo;
    const token = req.body.token;

  if (!owner || !repo || !token) {
    return res.status(400).json({ message: 'Missing owner, repo, or token' });
  }

  const commitOwner = owner;
  const commitRepo = repo;

  const commitMessage = 'Automated commit';
  const commitContent = 'This is the content of the file.';

 
  (async () => {
    const octokit = new Octokit({
        auth: token
    
    });
  
    console.log('Starting...');
   commitInterval = setInterval(async () => {
        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            
            owner: commitOwner,
            repo: commitRepo,
            path: `${randomletters(10)}.txt`,
            message: commitMessage,
            content: Buffer.from(commitContent).toString('base64'),
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
        }).then(res => {
            console.log('Commit successful!');
           
        }).catch(err => console.log(err));
    }, config.interval);
})();
        
        
        res.status(200).json({ message: 'Commits started' });
}
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
}


function stop_commit(req, res ) {
    try {
       
    if (commitInterval) {
      clearInterval(commitInterval);
      commitInterval = undefined;
      console.log('Commits stopped.');
    }
    res.json({ message: 'Commits stopped' });
}catch (error) {
        res.status(500).json({ message: error.message });
}
 }
  

  


function randomletters(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  

  module.exports = {commit,stop_commit};
  
