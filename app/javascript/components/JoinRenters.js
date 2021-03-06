import React, {useState} from 'react' 
import { useHistory } from "react-router-dom"
import axios from 'axios'

function JoinRenters() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/renter_registrations', {
          renter: {
            email: email,
            password: password
          }
        },{
          withCredentials: true
        })
        .then(response => {
          if (response.data.status === 'created'){
            history.push('/listings')
          }
        }).catch(error => {
          console.log('error', error);
        })
        
    }

    function handleBack() {
        history.push('/')
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
            <button onClick={handleBack}>back</button>

            </div>
    )
}

export default JoinRenters


