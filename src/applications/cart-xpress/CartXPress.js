import { useState } from "react";
import AddProduct from "./AddProduct";
import mockProductsList from "./mockProductsList";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";


const CartXPress = () => {

    const [products, setProducts] = useState(mockProductsList);
    const [showAddProduct, setShowAddProduct] = useState(true);



    // Extract unique types
    //const types = ['Toys', 'Electrons','Books'];

    const uniqueTypes = new Set();
    mockProductsList.forEach(e => uniqueTypes.add(e.type));
    const types = Array.from(uniqueTypes);
    console.info(JSON.stringify(types));
    types.unshift('All');

    const handleSearchChange = (data) => {
        console.info(data);

        const typeFilter = (type, requiredtype) => requiredtype === 'All' || type === requiredtype;

        const nameFilter = (name, regex) => name.search(new RegExp(regex, 'i')) > -1;

        const sortFilter = (sort) => {

            switch (sort) {
                case 'Name (A-Z)':
                    return (p1, p2) => p1.name.localeCompare(p2.name);
                case 'Name (Z-A)':
                    return (p1, p2) => p2.name.localeCompare(p1.name);
                case 'Cost (Low to High)':
                    return (p1, p2) => p1.cost - p2.cost;
                case 'Cost (High to Low)':
                    return (p1, p2) => p2.cost - p1.cost;
                case 'Type (A-Z)':
                    return (p1, p2) => p1.type.localeCompare(p2.type);
                case 'Type (Z-A)':
                    return (p1, p2) => p2.type.localeCompare(p1.type);
            }

        }

        if (data.type === 'All') {
            //setProducts()
        }

        setProducts(
            mockProductsList.filter(
                (prod) => nameFilter(prod.name, data.name) && typeFilter(prod.type, data.type)
            ).sort(sortFilter(data.sort))
        );

    }

    const handleSubmit = (data) => {
        data.name = data.product;
        mockProductsList.unshift(data);
        setShowAddProduct(false);
        setProducts( prev => [data,...prev])
        console.info(data);
    }

    return (
        <>
            {
                showAddProduct && <AddProduct onSubmit={handleSubmit}/>
            }

            {
                !showAddProduct &&
                <>
                    <button className="btn btn-success" onClick={() => setShowAddProduct(true)}>Add Product</button>
                    <SearchBar productTypes={types} onChange={handleSearchChange} />
                    <ProductsList products={products} />
                </>

            }


        </>
    );
}

export default CartXPress;