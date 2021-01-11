import React from 'react';
import CategoryListContainer from '../../components/CategoryListContainer/index';
import Navbar from '../../components/Navbar';


function HomePage (props) {
    return (
        <div>
           <Navbar></Navbar>
        <div>
            <img src = 'https://placehold.co/1400x400' alt= 'banner'></img>
        </div>
       <div>
           <CategoryListContainer></CategoryListContainer>
       </div>
       
       
       
        </div>
            
        
    );
}

export default HomePage;