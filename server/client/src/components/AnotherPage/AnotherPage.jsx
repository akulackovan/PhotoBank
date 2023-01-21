import React, {useState, useContext, useEffect, Component} from 'react'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'
import {Redirect, Link} from "react-router-dom"
import PostTable from '../../components/PostsTable/PostsTable'
import './AnotherPage.scss'

export const AnotherPage = ({id}) => {
    const { userId } = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [post, setPost] = useState('');
    const [userProfileImage, setUserProfileImage] = useState({});
    const [subscriptions, setSubscriptions] = useState(0)
    const [isSubscription, setSubscription] = useState(false)
    const [errorMessage, setErrorMessage] = React.useState("");
    const [form, setForm] = useState(
        {
            userId: userId,
            subscribe: id
        }
    )
    console.log("HERE" + userId + " " + id)

    const subscribe = async () => {
        try {
            await axios.post('/auth/subscribe', {...form}, {
                headers:
                    {
                        'Context-Type': 'application/json'
                    }
            })
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message)
        }
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: '/auth/user',
            headers: {
                "x-auth-token": localStorage.getItem('auth-token'),
                "content-type": "application/json"
            },
            body: {
                'userId': id,
                'myId': userId
            }

        })
            .then(response => {
                    console.log("HEEEE" + response.data.user.image)
                    setUserProfileImage(response.data.user.image);
                    setUsername(response.data.user.username)
                    setText(response.data.user.text)
                    setSubscriptions(response.data.subscibe.length)
                    setSubscription(response.data.isSubscribe)
                    console.log(response.data.subscibe)
                    if (response.data.user.posts == "") {
                        setPost('Нет постов')
                    }
                }
            )
    }, []);


    return (
        <div className='profile'>
            <div className='header'>
                <div className='first'>
                    <img className='img' src={userProfileImage}/>
                </div>
                <div className='second'>
                    <div className='header'>
                        <div className='user'>{username}</div>
                    </div>
                    <div className='text'>
                        <div className='back2'>
                            <div className='h2'>Описание:</div>
                            {text == '' && <div> Нет описания</div>}
                            {text != '' && <div> {text} </div>}
                        </div>
                        <div className='back2'>
                            <div className='h2'>Количество подписчиков: {subscriptions}</div>
                        </div>
                        <div>
                            <button className='button' onClick={() => {
                                setSubscription(true); subscribe()
                            }}>{isSubscription && "Отписаться"}{!isSubscription && "Подписаться"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div><PostTable id={id}/></div>
        </div>
    )
}