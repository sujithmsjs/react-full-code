import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import mockProductsList from "./mockProductsList";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";
import axios from 'axios'
import { useParams, useSearchParams } from "react-router-dom";
import { Pagination } from "./Pagination";
import { PageSize } from "./PageSize";


const Prods = () => {

    const [products, setProducts] = useState([]);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = useState(0);

    const size = searchParams.get('size') || 10;
    const page = searchParams.get('page') || 0;



    const currentPage = parseInt(searchParams.get('page'), 10) || 1;
    const pageSize = parseInt(searchParams.get('size'), 10) || 10;

    const handlePageChange = (page) => {
        const updatedSearchParams = { ...Object.fromEntries(searchParams), page: page.toString() };
        setSearchParams(updatedSearchParams);
        getAllProducts(size, page);
    };

    const handlePageSize = (size) => {
        const updatedSearchParams = { ...Object.fromEntries(searchParams), size: size.toString(), page : 1 };
        setSearchParams(updatedSearchParams);
        getAllProducts(size, 1);
    };

    const getAllProducts = async (size, page) => {
        try {
            const res = await axios.get('http://localhost:9090/api/products',
                {
                    params: {
                        size, page: page - 1
                    }
                });
            console.info(res.data);
            setTotalPages(res.data.totalPages);
            setProducts(res.data.content);
        } catch (err) {
            console.error('Error inside product saving...', err);
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:9090/api/products/${id}`); 
            getAllProducts(size, page);
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

    return (
        <>
            {
                showAddProduct && <AddProduct onSubmit={handleSubmit} />
            }

            {
                !showAddProduct &&
                <>
                    <Pagination length={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />

                    <button className="btn btn-success" onClick={() => setShowAddProduct(true)}>Add Product</button>
                    {/* <SearchBar productTypes={types} onChange={handleSearchChange} /> */}
                    <ProductsList products={products} onDelete={handleDelete} />
                    <Pagination length={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
                    <PageSize currentSize={pageSize} onSizeChange={handlePageSize} />
                </>

            }


        </>
    );
}

export default Prods;