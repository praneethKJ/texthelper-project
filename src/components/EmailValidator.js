import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EmailValidator(props) {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get(`https://api.emailvalidation.io/v1/info?apikey=ema_live_bLIEKKHnhWPD5C8atarTeivMoGj7n2dHVIf033AA&email=${email}`)
            .then(res => setData([res.data]))  // Store the API response in an array
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    const handleReset = () => {
        setEmail('');
        setUser('');
    }

    return (
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>EmailValidator</h1>
            <form action="" className="login">
                <label htmlFor="user">Enter user:</label>
                <input type="text" id="user" placeholder='user' value={user} onChange={handleUserChange} />
                <br /><br />
                <label htmlFor="email">Enter email:</label>
                <input type="text" id="email" placeholder='Email Here' value={email} onChange={handleEmailChange} />
                <br /> <br />
            </form>
            <div className="buttons">
                <button type="button" className='submit' onClick={fetchData}>
                    Submit
                </button>
                <button type="button" onClick={handleReset} className='reset'>
                    Reset
                </button>
                <br /><br />
            </div>
            <div className="container">
                <h2>Result</h2>
                <div className="mt-3">
                    {data.map((userData, index) => (
                        <p key={index}>
                            <p><strong>User: </strong>{userData.user}</p>
                            <p><strong>Email: </strong>{userData.email}</p>
                            <p><strong>Deliverability: </strong>{userData.state}</p>
                            <p><strong>QualityScore: </strong>{userData.score}</p>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
