import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import {  setSelectedCategory, selectCategories, selectSelectedCategory } from '../redux/categorySlice';
import './Home.css';   

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const products = useSelector((state) => state.products.products);
  const totalProducts = useSelector((state) => state.products.total);
  const status = useSelector((state) => state.products.status);

  const [searchTerm, setSearchTerm] = useState('');
  const [skip, setSkip] = useState(0);
   const [selectedCard, setSelectedCard] = useState(null); 

  
  useEffect(() => {
    const fetchParams = {
      category: selectedCategory || "",
      limit: 10,
      skip: skip,
    };
  
    dispatch(fetchProducts(fetchParams)).then((response) => {
      console.log("Fetched Products:", response);   
    });
  }, [dispatch, selectedCategory, skip]);
  


  // useEffect(() => {
  //   if (products.length >= totalProducts) {
  //     setHasMore(false);
  //   }
  // }, [products, totalProducts]);
  //  
  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
    setSkip(0);  
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSkip(0);  
  };
 
  const handleLoadMore = () => {
    if (products.length < totalProducts) { 
      setSkip((prevSkip) => prevSkip + 10); 
    }
  };
  

  const handleCardSelect = (productId) => {
    setSelectedCard(productId);   
  };
 
  const filteredProducts = products.filter((product) =>
    (selectedCategory ? product.category === selectedCategory : true) &&  
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  

  return (
    <div >
      {/* <div className='search-bar'> */}
      
      <h1  >Product List</h1>
      <input 
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    {/*  */}
      <div>
        <h2 className='cat'>Categories : </h2><br />
        {categories.map((item, index) => (
          <button key={`${item.slug}-${index}`}>
            {item.name}
          </button>
 /*  onClick={() => handleCategoryChange(item.name)} i have removed the onclik func because things weer not working in desired way */

        ))}
        <button className='allBtn' onClick={() => handleCategoryChange('')}>All Categories</button>
      </div>

      <div className="product-grid">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error fetching products</p>}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div 
              className={`product-card ${selectedCard === product.id ? 'selected' : ''}`} 
              key={product.id} 
              onClick={() => handleCardSelect(product.id)}
            >
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className='price'>Price: ${product.price}</p>
              <img className='product-image' src={product.images} alt={product.title} />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

       
      {filteredProducts.length < totalProducts && filteredProducts.length > 0 && (
  <button className='loadBtn' onClick={handleLoadMore}>Load More Products</button>
)}

    </div>
  );
};

export default Home;


 