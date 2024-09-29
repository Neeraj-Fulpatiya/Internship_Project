
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './redux/categorySlice';
import Home from './components/Home';
// import ProductsPage from './components/ProductsPage';   

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
      
      </Routes>
    </Router>
  );
};

export default App;

  //                         ******************************************************

//  How to Run the Project:

//  1.npm install
//  2. Navigate to the Project Directory:  cd dummyjson-products
//  3. npm start



//******/ What i have achieved from the Project  ==>

  // 1. State Management: Utilizes Redux for effective state management.
  // 2. Load More Functionality: Allows users to load additional products seamlessly.
  // 3. Conventional Coding Practices: I have followed conventional ways of writing clean and maintainable code, adhering to best practices.
//   4. Pagination:  While fetching products we have used pagination parameter and kept size 10 for every new rendering of products onto the page.
  // 5. Selectable: Displayed all categories and made it selectable.
//   6. UI and  UX : The application features a clean and intuitive design.


//*******/ what i was not able to deliver from this project  ==>

  // 1. Category Filtering: Users cannot filter data by clicking on specific categories, limiting the ease of navigation.
  

//****** Final Note==>

// "I want to be upfront about my performance in this project. While I gave my best effort, 
// I wasn’t able to meet all the expectations fully. For the past two days, 
// I've been struggling with my health plus some complexities in the proeject and also encountering with some new stuffs , which made it difficult to work at my usual capacity. 
// I want you to know that this isn’t an excuse to hide my shortcomings, but a genuine reason that
//  held me back from showing the full extent of what I can do.

// I'm capable of much more, and I deeply care about the quality of my work.
//  I believe that under normal circumstances, I would have delivered exactly what was asked for,
//   and I’m committed to proving that in the future.


// ******************************************************************* 

// ** Now that I have submitted the project, I'd be happy to discuss it further and any future steps.
//  We can schedule a call at your convenience to go over everything in more detail.     

// **   Looking forward to your feedback and our conversation!

