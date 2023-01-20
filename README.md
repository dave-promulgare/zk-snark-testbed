# Getting Started with zk_Snark testbed

This project is the test bed for trying out different sz-Snark curcuits
It is also used to demonstrate how to use zk-Snark in a node.js application.  This code runs in a browser using React.js.

Some of the files that were generated from the instructions in [snarkjs](https://github.com/iden3/snarkjs#readme) need to be made available.  To handle that, there is a simple HTTP server app in the file-server folder that statically dishes out the files.

To start go to the file-server directory and run:

### `node index.js`

Runs the web server .\
Open [http://localhost:8000/verification_key.json](http://localhost:8000/verification_key.json) to download it using your browser.

Then, in the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Using the application

You can use the form that is in the Generate component to pass in the input values.  INput values are entered as a JSON string.

Click on the Generate button to use this input as a parameter for the snarkjs.groth16.fullProve call to generate the proof.

