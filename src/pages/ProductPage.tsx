import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductsSection'
import React from 'react'

const ProductPage = () => {
  return (
    <section>
        <div>
            <Navbar />
        </div>

        <div>
            <ProductsSection />
        </div>

        <div>
            <Footer />
        </div>
    </section>
  )
}

export default ProductPage