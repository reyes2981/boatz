import React, {useState} from 'react'
import { useHistory } from "react-router-dom"


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        history.push('/listings')
    }

    function handleBack() {
        history.push('/')
    }

    return (
        <div> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='email'
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type='submit'
                    value='login'
                />
            </form>
            <button onClick={handleBack}>back</button>

        </div>
    )
}

export default Login;