import Product from '@/components/Product'
import Cta from '@/components/cta'
import Feature from '@/components/feature'
import Footer from '@/components/footer'
import { ProductType } from '@/interfaces'
import React from 'react'

const ProductPage = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const products: ProductType[] = await res.json()
    return (
        <main>
            <Feature />
            <section className="flex flex-col space-y-12">
                <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 font-semibold'>
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <Cta/>
        </main>
    )
}

export default ProductPage