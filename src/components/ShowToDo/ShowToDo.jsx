import React from 'react'

export const ShowToDo = ({ addedTask, handleDelete }) => {
    return (
        <>

            <div className='mx-4 md:mx-0'>
                {
                    addedTask.map((task, ind) => (
                        <div key={ind} className='bg-gray-500 text-white md:w-6/12 mx-auto flex justify-between items-center px-3 rounded-lg mt-2'>
                            <h2 className='w-5/6 text-[22px] py-2 '>{task}</h2>
                            <button className='flex items-center gap-2'
                                onClick={() => { handleDelete(ind) }}
                            ><span>{ind + 1}</span> <img className='w-8' src="https://img.icons8.com/?size=48&id=63688&format=png" alt="delete button icon" /></button>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
