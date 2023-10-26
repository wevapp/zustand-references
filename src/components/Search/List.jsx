import React, { useState } from 'react'
import { useSearchStore } from '../../store/useSearchStore'

const List = () => {

    // Zustand state
    const {peoples, removePerson} = useSearchStore((state) => state)
    const [searcPeople, setSearchPerson] = useState('')

    // Function to delete a specific person by their name
    const handleDelete = (name) => {
        const indexToDelete = peoples.findIndex(people => people.name === name)
        if (indexToDelete !== -1) {
            removePerson(indexToDelete)
        }
    }
    
    // Search person
    const findPerson = peoples.filter((people) => people.name.includes(searcPeople.toLowerCase()))

  return (
    <div>
        <input 
            type="text"
            value={searcPeople}
            placeholder='Search Name'
            onChange={(e) => setSearchPerson(e.target.value.toLocaleLowerCase())}
            className='border-2 mt-8 ml-4 px-2'
        />
        <br />
        <ul className='flex mt-4'>
            {findPerson.map((people,index) => (
                <li className='className="min-w-[400px] max-w-[400px] m-2 p-2 bg-gray-200 shadow-md rounded-md font-semibold"'
                    key={index}
                >
                    {people.name}
                    <button 
                        onClick={() => {handleDelete(people.name)}}
                        className="hover:bg-yellow-500 hover:text-black border-2 px-4 text-black bg-blue-300 rounded-md ml-4"
                    >Del</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List