import React from 'react'
import { Link } from "react-router-dom"
import './AuthPage.scss'

const AuthPage = () => {
    return (
        <div className='auth'>
            <div className='center auth-page'>
                <h3>ФОТОБАНК</h3>
                <input
                    className="login"
                    type="text"
                    placeholder="Логин"
                    name="user"
                />
                <input
                    className="pass"
                    type="text"
                    placeholder="Пароль"
                    name="user"
                />
                <div className='regButton'>
                    <button>ВОЙТИ</button>
                    <Link to="/reg"><button>РЕГИСТРАЦИЯ</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AuthPage