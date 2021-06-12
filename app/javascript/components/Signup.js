import React, {useState} from 'react' 
import { useHistory } from "react-router-dom"

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        history.push('/listings')
    }
    return (
        <div>
            <h1>Create an Account</h1>
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
                    value='create account'
                />
            </form>
            </div>
    )
}

export default Signup


