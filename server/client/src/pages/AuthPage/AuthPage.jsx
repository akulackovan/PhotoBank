import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './AuthPage.scss'
import { AuthContext } from '../../context/AuthContext'

const AuthPage = () => {

    const [form, setForm] = useState(
        {
            username: '',
            password: ''
        }
    )

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form)
    }

    const { login } = useContext(AuthContext)


    const authHandler = async () =>
    {
        try {
            await axios.post('/auth/login', {...form}, {
                headers:
                {
                    'Context-Type': 'application/json'
                }
            })
            .then(response => 
                login(response.data.token, response.data.user._id))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='auth'>
            <div className='center auth-page'>
                <h3>ФОТОБАНК</h3>
                <input
                    className="login"
                    type="text"
                    placeholder="Логин" 
                    name="username"
                    onChange={changeForm}
                />
                <input
                    className="pass"
                    type="text"
                    placeholder="Пароль"
                    name="password"
                    onChange={changeForm}
                />
                    <button
                    onClick={authHandler}>ВОЙТИ</button>
                    <button><Link to="/reg">РЕГИСТРАЦИЯ</Link></button>

            </div>
        </div>
    )
}

export default AuthPage