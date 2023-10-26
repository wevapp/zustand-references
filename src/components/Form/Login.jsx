import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginStore } from '../../store/LogRegStore'

const Login = () => {
    // redirect to Homepage
    const history = useNavigate()

    const { validateLogin } = useLoginStore()

    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')

    const handleLogin = () => {
        const isValid = validateLogin(username, password)
        if(isValid){
            history('/home')
        }else{
            alert('Invalid Username or Password')
            setUsername('')
            setPassword('')
        }
    }

  return (
    <div>
        <input 
            type="text" 
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            className='border'
            required
        />
        <br />
        <input 
            type="password" 
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className='border'
            required
        />
        <br />
        <button
            onClick={handleLogin}
            className='bg-blue-400 px-2'
        >Login</button>
        <span><Link to='/register'>Sign-up</Link></span>
    </div>
  )
}

export default Login