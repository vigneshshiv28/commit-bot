const express = require('express');
const app = express();
const { Octokit } = require('@octokit/rest');
const cors = require('cors');

const commitRoutes = require('./routes/commit.js');


app.use(express.json());


app.use(corsapp.UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials()); // 
app.use('/user', commitRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

 
