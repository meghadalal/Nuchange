import React from 'react'
import JsonData from './data.json'
import { Table } from 'react-bootstrap'

function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info) => {
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.price}</td>
                    <td>{info.available}</td>
                    <td>{info.category}</td>
                    <td>{info.vendor}</td>
                </tr>)
        }
    )
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Vendor</th>
                        <th>Available</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{DisplayData}</tbody>
            </Table>
        </div>
    )
    }
     export default JsonDataDisplay;