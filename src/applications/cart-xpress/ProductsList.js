import { useState } from "react";
import mockProductsList from "./mockProductsList";



const ProductsList = ({products}) => {

    return (<table className="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                products.map( (p, index) => <tr key={index + 1}>
                    {/* <td>{p.id}</td> */}
                    <td>{index + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.cost}</td>
                    <td>{p.type}</td>
                    <td><button className="btn btn-primary btn-sm">Add to Cart</button></td>
                </tr>)
            }

        </tbody>
    </table>);



}

export default ProductsList;