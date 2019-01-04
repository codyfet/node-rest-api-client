import React from "react";
import {Row, Col} from 'react-bootstrap';

import {ProductTable} from './ProductTable';
import {ActionsBar} from "./ActionsBar";
import {EditModal} from "./EditModal";
import {getProducts, getProductById, createProduct, deleteProduct, updateProduct} from '../Services/api';

export class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showEditModal: false,
            selectedModel: null,
            list: []
        }
    }

    componentDidMount () {
        getProducts().then(
            (response) => {
                this.setState({
                    list: response.data
                });
            }
        )
    }

    handleToggleEditModal = () => {
        this.setState({
            showEditModal: !this.state.showEditModal
        });
    }

    handleCreateProduct = (model) => {
        createProduct(model).then(
            (response) => {
                // Актуализируем список.
                getProducts().then(
                    (response_) => {
                        this.setState({
                            list: response_.data
                        });
                    }
                )
            }
        );
    }

    handleGetProductById = (event) => {
        const id = event.target.parentElement.parentElement.parentElement.id;

        getProductById(id).then(
            (response) => {
                this.setState({
                    selectedModel: response.data,
                    showEditModal: true
                })
            }
        )
    }

    handleDeleteProduct = (event) => {
        const id = event.target.parentElement.parentElement.parentElement.id;

        deleteProduct(id).then(
            (response) => {
                // Актуализируем список.
                getProducts().then(
                    (response_) => {
                        this.setState({
                            list: response_.data
                        });
                    }
                )
            }
        )
    }

    handleUpdateProduct = () => {
        const id = this.state.selectedModel._id;

        // TODO: Здесь надо передавать измененную модель.
        updateProduct(id).then(
            (response) => {
                // Актуализируем список.
                getProducts().then(
                    (response_) => {
                        this.setState({
                            list: response_.data
                        });
                    }
                )
            }
        )
    }

    render () {
        return (
            <React.Fragment>
                <Row className="show-grid">
                    <Col xs={6} xsOffset={3}>
                        <ProductTable 
                            list={this.state.list}
                            deleteProduct={this.handleDeleteProduct}
                            getProductById={this.handleGetProductById}
                        />
                        <ActionsBar 
                            onToggleEditModal={this.handleToggleEditModal}
                            // TODO onGetProductById
                        />
                    </Col>
                </Row>
                {this.state.showEditModal && (
                    <EditModal 
                        onToggleEditModal={this.handleToggleEditModal}
                        onCreateProduct={this.handleCreateProduct}
                        onUpdateProduct={this.handleUpdateProduct}
                        selectedModel={!!this.state.selectedModel ? this.state.selectedModel : null}
                    />
                )}
            </React.Fragment>
        )
    }
}
