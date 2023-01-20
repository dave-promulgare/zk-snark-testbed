import React from "react";

class Generate extends React.Component {
    wasmFile = "http://192.168.2.226:8000/circuit_js/circuit.wasm";
    circuitKey = "http://192.168.2.226:8000/circuit_final.zkey";
    snarkjs = require("snarkjs");

    constructor(props) {
        super(props);
        this.state = {
            input: '{"a": 4, "b": 5, "c": 2}',
            proof: {},
            signals: ""
        }
    };

    changeHandler = e => {
        this.setState({
          input:e.target.value
        });
    }

    generateProof = async() => {
        // {VoterID, ElelctionID, Vote}
        console.log("wasmFile", this.wasmFile);
        console.log("circuitKey", this.circuitKey);
        console.log("input", this.state.input);
        console.log("Call=", this.snarkjs);
        const { proof, publicSignals } = await this.snarkjs.groth16.fullProve(this.input, this.wasmFile, this.circuitKey);
        console.log("proof", proof );
        console.log("signals", publicSignals);
    };

    handleClick = () => {
        this.generateProof();
    };

    render() {
        return (
            <div>
                <h1>Generate zk-Snark</h1>
                <form>
                    <p>
                        <label>Inputs : <input type="text" name="inputs"  value={this.state.input}  onChange={this.changeHandler} ></input></label>
                    </p>  
                </form>
                <button type="button" onClick={this.handleClick}>Generate</button>
            </div>
        );
    }  
}
  
export default Generate;