import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Paginate from './Paginate'
const Container = () => {
    const [products, setProducts] = useState([])
    const [productPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const[totalPages,setTotalPages]=useState(null)

    const indexOFLastProduct = currentPage * productPerPage
    const indexOfFirstProduct = indexOFLastProduct - productPerPage

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetch('https://dummyjson.com/products?limit=100')
            const res = await data.json()
            setTotalPages(res.total)
            setProducts(res.products)
        }
        getProducts()
    }, [])
    const handlePaginate=(page)=>{
        setCurrentPage(page)
    }
    return (
        <>
            <div className='flex justify-center text-3xl border border-b-black p-2'>
                <Link to='/addtocart'><div className='w-fit cursor-pointer font-extrabold hover:text-blue-700'>Cart</div></Link>
            </div>
            <div className='flex flex-wrap justify-center p-4'>
                {products.slice(indexOfFirstProduct, indexOFLastProduct).map((prod) =>
                    <div key={prod.id}><ProductCard prod={prod} /></div>
                )}
            </div>
            <div className='bg-black'>
                <Paginate pager={handlePaginate} total={totalPages} productPerPage={productPerPage}/>
            </div>
        </>
    )
}

export default Container