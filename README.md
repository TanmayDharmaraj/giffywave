# Giffywave

## How to setup
Assuming that you have node and npm setup, follow the below steps.

Open a terminal or command prompt and clone the repository

`git clone https://github.com/TanmayDharmaraj/giffywave`

From the downloaded repository
1. Make a copy of secrets-example.js and name it as secrets.js
2. Within secrets.js enter your client ids and secrets. The clarify client id and secret can be found on registering you app with [Clarifai](https://www.clarifai.com/). The Giphy API key can be found on [Giphy's GitHub Repo](https://github.com/Giphy/GiphyAPI) 

From the terminal navigate inside the directory and run

1. `npm install`
2. `npm start`

You should see a json output on your screen containing URL of the GIF.
