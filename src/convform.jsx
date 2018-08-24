const bitcoin = require("bitcoinjs-lib");
const React = require("react");

module.exports = class AddressConverterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "MPE8npAXs49HMpQGkETFqBa8GBzsRM5FJn",
            output: "",
            prefix: 0, // 0 is Bitcoin
            error: ""
        };
    }
    handleInputChange(event) {
        this.setState({ input: event.target.value });
    }
    handlePrefixChange(event) {
        this.setState({ prefix: parseInt(event.target.value) });
    }
    handleConvert() {
        try {
            const hashPart = bitcoin.address.fromBase58Check(this.state.input).hash;
            const converted = bitcoin.address.toBase58Check(hashPart, this.state.prefix);
            this.setState({ output: converted, error: "" });
        } catch (error) {
            this.setState({ error });
        }
    }
    render() {
        return (
            <form>
                Input: <input type="text" value={this.state.input} onChange={this.handleInputChange.bind(this)}></input> <br />
                New Prefix: <input type="number" min="0" max="255" step="1" value={this.state.prefix} onChange={this.handlePrefixChange.bind(this)}></input> <br />
                <input type="button" value="Convert" onClick={this.handleConvert.bind(this)}></input> <br />
                Output: <input type="text" value={this.state.output}></input> <br />
                <div hidden={!!this.state.error}>{this.state.error}</div>
            </form>
        );
    }
}