import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import mockProductsList from "./mockProductsList";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";
import axios from 'axios'
import { useParams, useSearchParams } from "react-router-dom";
import { Pagination } from "./Pagination";


const Prods = () => {

    const [products, setProducts] = useState([]);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const size = searchParams.get('size') || 10;
    const page = searchParams.get('page') || 0;


    const getAllProducts = async (size, page) => {
        try {
            const res = await axios.get('http://localhost:9090/api/products',
                {
                    params: {
                        size, page
                    }
                });
            console.info(res.data);
            setCurrentPage(res.data.number)
            setTotalPages(res.data.totalPages);
            setProducts(res.data.content);
        } catch (err) {
            console.error('Error inside product saving...', err);
        }
    }

    useEffect(() => {
        getAllProducts(size, page);
    }, [])

    const handleSubmit = async (data) => {

        data.price = data.cost;
        data.name = data.product;
        data.category = data.type;
        data.releaseDate = data.date;
        try {
            const res = await axios.post('http://localhost:9090/api/products', data);
            setShowAddProduct(false);
            getAllProducts(size, page);
        } catch (err) {
            console.error('Error inside product saving...', err);
        }
    }

    const handlePageChange = pageNo => {
        getAllProducts(size, pageNo);
    }

    return (
        <>
            {
                showAddProduct && <AddProduct onSubmit={handleSubmit} />
            }

            {
                !showAddProduct &&
                <>
                    <button className="btn btn-success" onClick={() => setShowAddProduct(true)}>Add Product</button>
                    {/* <SearchBar productTypes={types} onChange={handleSearchChange} /> */}
                    <ProductsList products={products} />
                    <Pagination length={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
                </>

            }


        </>
    );
}

export default Prods;