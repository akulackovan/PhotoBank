import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import './PostTable.scss'

const PostTable = ({ id }) => {

    const [post, setPost] = useState(null)


    useEffect(() => {
        try {
            axios({
                method: 'get',
                url: '/post/getMe',
                headers: {
                    "content-type": "application/json"
                },
                params: {
                    'id': id
                }
            })
                .then(response => {
                    console.log(response.data.isPost)
                    setPost(response.data.isPost)
                }
                )
        }
        catch (error) {
            console.log(error)
            setPost(error.response.data.message)
        }
    }, []);



    return (
        <div class="wrapper">
            {post && <div className='gal'>
                <div class="gallery">
                    <ul>
                        {post.map((option) => (
                            <li><img style={{ width: 351, height: 262 }} src={`data:img/png;base64, ${option.image}`} /></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='h2'>Фотографии закончились</h2>
                </div>
            </div>}
        </div>


    )
}

export default PostTable