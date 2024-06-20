import React from 'react'
import ProductCard from './ProductCard'
import steelIndustry from '../images/steel-industry.jpeg'
import report from '../images/carbon-report.png'

function Products() {
    return (
        <div name='products' className='products-container'>
            <div className="products-container__text">
                <h3>Developed for Everyone</h3>
                <h2>Empowering Every Industry</h2>
                <p>
                    Unlock a greener future with our tailored solution products, perfect for any industry. Our products are designed to adapt and scale as for every industry so it can impact and add value to every sector.
                </p>
            </div>
            <div className="products-container__cards">
                <ProductCard image={steelIndustry} title='Steel Industry' />
                <ProductCard image={steelIndustry} title='Steel Industry' />
                <ProductCard image={steelIndustry} title='Steel Industry' />
                <ProductCard image={steelIndustry} title='Steel Industry' />
                <ProductCard image={steelIndustry} title='Steel Industry' />
                <ProductCard image={steelIndustry} title='Steel Industry' />
            </div>

            <div className='products-container__neumorphism'>
                <div className='neumorphism-text'>
                    <p>In depth report in a few clicks.</p>
                    <h2>GreenGate's Carbon Calculator</h2>
                    <h3>Take the First Step with our Carbon Calculator</h3>
                    <div className="neumorphism-buttons">
                        <button className='btn-dark'>Calculate Now</button>
                        <button className='btn-light'>How it works?</button>
                    </div>
                </div>
                <div className="report">
                    <img height={400} src={report} alt="" />
                </div>

            </div>
            <div className='quote'>
                <h2>
                    "We are the first generation to feel the effect of climate change and the <span>last generation who can do something about it.</span> "
                </h2>
                <h3>Barak Obama</h3>
            </div>
        </div>
    )
}

export default Products