import { useState } from "react";
import mockProductsList from "./mockProductsList";



const ProductsList = ({ products, onDelete, onEdit, onAddCart }) => {

    return (<table className="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                products.map((p, index) => <tr key={p.id}>
                    {/* <td>{p.id}</td> */}
                    <td>{index + 1}</td>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.category}</td>
                    <td>
                        <button className="btn btn-primary btn-sm" onClick={() => onAddCart(p.id)}>Add to Cart</button>
                        <button className="btn btn-danger btn-sm mx-1" onClick={() => onDelete(p.id)}>Del</button>
                        <button className="btn btn-success btn-sm mx-1" onClick={() => onEdit(p.id)}>Edit</button>
                    </td>
                </tr>)
            }

        </tbody>
    </table>);



}

export default ProductsList;