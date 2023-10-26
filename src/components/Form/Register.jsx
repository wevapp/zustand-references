import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegisterStore } from '../../store/LogRegStore'

const Register = () => {
    // Zustand 
    const {users, addUser} = useRegisterStore((state) => state)

    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastname ] = useState('')
    const [selectedGender, setSelectedGender] = useState('')
    const [contactNumber, setcontactNumber ] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [email, setEmail ] = useState('')
    const [regUsername, setRegUsername ] = useState('')
    const [regPassword, setRegPassword ] = useState('')

    const handleRegister = () => {
        if(firstName !== '' && lastName !== '' && selectedGender !== '' && contactNumber !== '' && birthDate !== '' && email !== '' && regUsername !== '' && regPassword !== ''){
            addUser(firstName, lastName, selectedGender, contactNumber, birthDate, email, regUsername, regPassword)
            alert('You are Registered')
            setFirstName('')
            setLastname('')
            setcontactNumber('')
            setBirthDate('')
            setEmail('')
            setRegUsername('')
            setRegPassword('')
        }else{
            alert('Invalid Registration')
        }
    }

    // Gender function
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value)
      }

    console.log(users)
  return (
    <div>
        <input 
            type="text" 
            name='firstName'
            value={firstName}
            placeholder='Firstname'
            onChange={(e) => setFirstName(e.target.value)}
            className='border'
            required
        />
        <br />
        <input 
            type="text" 
            name='lastName'
            value={lastName}
            placeholder='Lastname'
            onChange={(e) => setLastname(e.target.value)}
            className='border'
            required
        />
        <br />
        <label>Gender:</label>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === 'male'}
            onChange={handleGenderChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={selectedGender === 'other'}
            onChange={handleGenderChange}
          />
          Other
        </label>
      </div>
      <br />
        <label htmlFor="">Birthdate: </label>
        <br />
        <input
            type="date"
            id="birthday"
            name="birthday"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className='border'
            required
        />
        <br />
        <input 
            type="text"
            name='contactNumber'
            value={contactNumber}
            placeholder='Contact #'
            onChange={(e) => {
                setcontactNumber(e.target.value)
                if(contactNumber.length > 10){
                    alert('must be 11 digit')
                }
            }}
            className='border'
            required
        />
        <br />
        <input 
            type="email" 
            name='email'
            value={email}
            placeholder='example@example.com'
            onChange={(e) => setEmail(e.target.value)}
            className='border'
            required
        />
        <br />
        <input 
            type="text" 
            name='regUsername'
            value={regUsername}
            placeholder='Username'
            onChange={(e) => setRegUsername(e.target.value)}
            className='border'
            required
        />
        <br />
        <input 
            type="password" 
            name='regPassword'
            value={regPassword}
            placeholder='Password'
            onChange={(e) => setRegPassword(e.target.value)}
            className='border'
            required
        />
        <br />
        <button
            onClick={handleRegister}
            className='bg-green-400 px-2'
        >Register</button>
        <span>Already Have an Acount? <Link to='/login'>Sign-in</Link></span>
    </div>
  )
}

export default Register