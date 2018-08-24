import React from "react";
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock
} from "react-bootstrap";

export default function FieldGroup(opts) {
    const { id, label, help } = opts;
    const props = Object.assign({}, opts, {
        id: void 0, label: void 0, help: void 0
    });
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}