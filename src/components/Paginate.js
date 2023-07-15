import React from 'react'

const Paginate = ({pager,total,productPerPage,currentPage,setCurrentPage}) => {
    const pages=[]
    for (let i=1;i<=Math.floor(total/productPerPage);i++){
        pages.push(i)
    }
    const handlePrev=()=>{
        setCurrentPage(currentPage=>currentPage-1)
    }
    const handleNext=()=>{
        setCurrentPage(currentPage=>currentPage+1)
    }

  return (
    <>
    <div className=' bg-black flex p-2 justify-center'>
        <div className='text-white ml-1 mt-[10px]'onClick={()=>handlePrev()}><button disabled={currentPage===1}>prev</button> </div>
        {pages.map((p)=>
        <div className='w-[35px] text-white m-3 cursor-pointer text-center rounded-xl hover:bg-white hover:text-black' onClick={()=>pager(p)}>
            {p}
        </div>
        )}
        <div className='text-white ml-2 mt-[10px] cursor-pointer' onClick={()=>handleNext()}><button disabled={currentPage===Math.floor(total/productPerPage)}>next</button></div>
    </div>
    </>
  )
}

export default Paginate