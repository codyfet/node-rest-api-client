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

    /**
     * Актуализирует список записей в таблице.
     */
    refreshTable = () => {
        getProducts().then(
            (response) => {
                this.setState({
                    list: response.data
                });
            }
        );
    }

    /**
     * Обработчик отображения/скрытия модального окна "Изменение продукта".
     */
    handleToggleEditModal = () => {
        this.setState({
            showEditModal: !this.state.showEditModal
        });
    }

    /**
     * Обработчик создания продукта.
     * 
     * @param {Object} model Данные создаваемого продукта.
     */
    handleCreateProduct = (model) => {
        createProduct(model).then(
            (response) => {
                this.refreshTable();
            }
        );
    }

    /**
     * Обработчик получения продукта по его id.
     * 
     * @param {Object} event DOM событие.
     */
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

    /**
     * Обработчик удаления продукта.
     * 
     * @param {Object} event DOM событие.
     */
    handleDeleteProduct = (event) => {
        const id = event.target.parentElement.parentElement.parentElement.id;

        deleteProduct(id).then(
            (response) => {
                this.refreshTable();
            }
        )
    }

    /**
     * Обработчик изменения модели.
     * 
     * @param {Object} model Изменённая модель.
     */
    handleUpdateProduct = (model) => {
        const id = this.state.selectedModel._id;

        updateProduct(id, model).then(
            (response) => {
                this.refreshTable();
                this.setState({selectedModel: null})
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
                            onDeleteProduct={this.handleDeleteProduct}
                            onGetProductById={this.handleGetProductById}
                        />
                        <ActionsBar 
                            onToggleEditModal={this.handleToggleEditModal}
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
        );
    }
}
