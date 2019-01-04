import React from 'react';
import {Glyphicon, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export const ActionsBar = (props) => {
    return (
        <Form className="actions-bar" inline>
            <FormGroup className="search-section">
                <ControlLabel>Найти product</ControlLabel>
                <FormControl type="text" placeholder="Введите имя product" />
                <Button className="action-btn" onClick={props.onGetProductById}>
                    <Glyphicon glyph="search" title="Найти продукт" />
                </Button>               
                <Button className="action-btn" onClick={props.onToggleEditModal}>
                    <Glyphicon glyph="plus" title="Добавить продукт" />
                </Button>
            </FormGroup>
        </Form>
    );
}