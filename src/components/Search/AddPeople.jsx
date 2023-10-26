import React, { useState } from 'react'
import { useSearchStore } from '../../store/useSearchStore'

const AddPeople = () => {

    // array variable for zustand
    const {peoples, addPerson} = useSearchStore((state) => state)

    // variable hold user input
    const [name, setName] = useState('')
    const [result, setResult] = useState('')

    // perform to add new Person
    const handleClick = () => {
        const lowerCaseName = name.toLowerCase() // Ensure lowercase for consistency
        if(name !== ''){
            if (peoples.some(person => person.name === lowerCaseName)) {
                setName('')
                setResult('Name already added')
            } else {
                addPerson(lowerCaseName)
                setName('')
                setResult('Successfully Added')
            }
        }else{
            setResult('Enter Name')
        }
    }

console.log(peoples)
  return (
    <div>
        <input 
            type="text"
            value={name}
            placeholder='Add Person'
            onChange={(e) => setName(e.target.value)}
            className='border-2 mt-8 ml-4 px-4'
        />
        <button 
            onClick={handleClick}
            className='bg-green-300 ml-2 px-4 py-1 rounded'
        >Add</button>
        <p className='ml-4'><small>{result}</small></p>
    </div>
  )
}

export default AddPeople