import { useState } from "react";
import MyDropdwonBox from "../../my-ui/MyDropdwonBox";


const sortTypes = [
    'Name (A-Z)',
    'Name (Z-A)',
    'Cost (Low to High)',
    'Cost (High to Low)',
    'Type (A-Z)',
    'Type (Z-A)'
]


const SearchBar = ({ productTypes, onChange }) => {

    const [search, setSearch] = useState({
        type: productTypes[0],
        sort: sortTypes[0],
        name: ''
    });


    const handleTitleChange = (event) => {
        setSearch(pre => {
            const newState = { ...pre, name: event.target.value };
            onChange(newState);
            return newState;
        })
    }

    const handleTypeChange = (event) => {
        setSearch(pre => {
            const newState = { ...pre, type: event.target.value };
            onChange(newState);
            return newState;
        })
    }

    const handleSortChange = (event) => {
        setSearch(pre => {
            const newState = { ...pre, sort: event.target.value };
            onChange(newState);
            return newState;
        })
    }
    return (
        <>
            <h3>Product List</h3>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="filterType">Filter by Type:</label>

                    <MyDropdwonBox
                        name="type"
                        options={productTypes}
                        onChange={handleTypeChange}
                    />

                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="sortOptions">Sort by:</label>
                    <MyDropdwonBox
                        name="sort"
                        options={sortTypes}
                        onChange={handleSortChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="nameSearch">Search by name:</label>
                    <input type="text" className="form-control" defaultValue={search.name} onChange={handleTitleChange} />
                </div>
            </div>
        </>
    );
}

export default SearchBar;