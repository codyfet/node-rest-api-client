import React from 'react';
import {Table, Button, Glyphicon} from 'react-bootstrap';

export const ProductTable = (props) => {
    if (props.list.length === 0) {
        return <h1 className="empty-header">В таблице нет записей</h1>
    }

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map(
                        (item, index) => {
                            return (
                                <tr id={item._id} key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Button className="action-btn" bsSize="xsmall" onClick={props.getProductById}>
                                            <Glyphicon glyph="pencil" title="Изменить" />
                                        </Button>
                                        <Button className="action-btn" bsSize="xsmall" title="Удалить" onClick={props.deleteProduct}>
                                            <Glyphicon glyph="remove" />
                                        </Button>
                                    </td>
                                </tr>
                            );
                        }
                    )
                }              
            </tbody>
        </Table>
    );
}