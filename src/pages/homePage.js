import React from "react";
import Navbar from '../components/navbar'
import ProductCard from "../components/product-cards"
import SearchForm from '../components/search-container'
import './homepage.css'
import Contact from "../components/contact";
import FooterPage from "../components/footer";
import PromoSections from "../components/promoSections";

const HomePage = () =>{
    return(
        <div>
        <Navbar></Navbar>
        <ProductCard />
        <PromoSections />
        <Contact />
        <FooterPage />
        </div>
     )
}

export default HomePage