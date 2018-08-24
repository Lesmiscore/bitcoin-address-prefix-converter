import React from "react";
import {
    Alert, Button
} from "react-bootstrap";

export default class Error extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);

        this.state = {
            show: true,
            message: props.message
        };
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <h4>Error occured</h4>
                    <p>{this.state.message}</p>
                    <p>
                        <Button onClick={this.handleDismiss}>Ignore</Button>
                    </p>
                </Alert>
            );
        } else {
            return null;
        }
    }
}