import React from 'react'

const Paginate = ({pager,total,productPerPage}) => {
    const pages=[]
    for (let i=1;i<=Math.floor(total/productPerPage);i++){
        pages.push(i)
    }

  return (
    <>
    <div className='w-fit bg-black flex p-2 justify-center'>
        {pages.map((p)=>
        <div className='w-[35px] text-white m-3 cursor-pointer text-center rounded-xl hover:bg-white hover:text-black ' onClick={()=>pager(p)}>
            {p}
        </div>
        )}
    </div>
    </>
  )
}

export default Paginate