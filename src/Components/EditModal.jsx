import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.selectedModel ? props.selectedModel.name : '',
            price: props.selectedModel ? props.selectedModel.price : '',
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSaveButton = this.handleSaveButton.bind(this);
    }

    handleNameChange (event) {
        this.setState({
            name: event.target.value
        });
    }

    handlePriceChange (event) {
        this.setState({
            price: event.target.value
        });
    }

    handleSaveButton () {
        const model = {
            name: this.state.name,
            price: this.state.price
        };

        !!this.props.selectedModel ?
            this.props.onUpdateProduct(model) : 
            this.props.onCreateProduct(model)            

        this.props.onToggleEditModal();
    }

    render () {
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Добавление записи</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>Название</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Введите значение"
                                    onChange={this.handleNameChange}
                                />
                                <br />
                                <ControlLabel>Цена</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.price}
                                    placeholder="Введите значение"
                                    onChange={this.handlePriceChange}
                                />
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.onToggleEditModal}>Закрыть</Button>
                        <Button bsStyle="primary" onClick={this.handleSaveButton}>Сохранить</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}