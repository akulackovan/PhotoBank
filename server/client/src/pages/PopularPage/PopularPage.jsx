import React, {useEffect, useState} from 'react'
import axios from "axios";
import './PopularPage.scss'

const PopularPage = () => {
    const [posts, setPosts] = useState(null)
    const [errorMessage, setErrorMessage] = React.useState("")


    useEffect(() => {
        try {
            axios({
                method: 'get',
                url: '/post/popular',
                headers: {
                    "x-auth-token": localStorage.getItem('auth-token'),
                    "content-type": "application/json"
                }
            })
                .then(response => {
                        console.log(response.data.posts)
                        setPosts(response.data.posts)
                        // createPhoto(response.data.posts)
                    }
                )

        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message)
        }
    }, [])

    const getColumn = (ind) => {
        var res = []
        if (posts) {
            for (let i = ind; i < posts.length; i += 3) {
                res.push(React.createElement("img", {src: 'data:img/png;base64,' + posts[i].image, className: "picture"}, null))
            }
        }
        console.log(res)
        return res
    }


    return (
        <div class='row popular' id="popular-div">
            <div className="column">
                {getColumn(0)}
            </div>
            <div className="column">
                {getColumn(1)}
            </div>
            <div className="column">
                {getColumn(2)}
            </div>
        </div>
    )
}

export default PopularPage