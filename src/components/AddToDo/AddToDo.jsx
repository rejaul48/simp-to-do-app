import React from 'react'

export const AddToDo = ({ handleInputField, handleAddToDo, task }) => {
    return (
        <>

            <div className='flex justify-center items-center my-8 px-5 md:px-0'>

                <input
                    onChange={handleInputField}
                    value={task}
                    type="text"
                    placeholder="Add task name here ..."
                    className="input input-bordered input-primary w-full max-w-lg" />

                {/* submit button */}
                <button
                    onClick={handleAddToDo}

                    className='btn ml-2 bg-gray-700 text-white hover:bg-gray-900'>Add ToDo</button>
            </div>

        </>
    )
}
