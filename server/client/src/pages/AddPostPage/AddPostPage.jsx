import React, {useState} from 'react'
import {Redirect} from "react-router-dom"
import axios from 'axios'
import './AddPostPage.scss'
import CityCombobox from '../../components/CityCombobox/CityCombobox'

function encodeImageFileAsURL(element) {
    var filesSelected = document.getElementById("input__file").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();
        var buffer = ''
        fileReader.onload = function (fileLoadedEvent) {
            buffer = fileLoadedEvent.target.result
            element.photo = buffer
            return buffer
        }
        fileReader.readAsDataURL(fileToLoad);
        console.log("buff2 " + buffer)
        return buffer
    }
}

const AddPostPage = () => {
    const [errorMessage, setErrorMessage] = React.useState("")
    const [redirect, setRedirect] = React.useState(false)
    const [form, setForm] = useState(
        {
            photo: '',
            city: '1',
            description: ''
        }
    )

    const changeForm = (event) => {
        console.log("HEY" + event.target.value)
        if (event.target.name === "photo") {
            encodeImageFileAsURL(form)
        } else {
            setForm({...form, [event.target.name]: event.target.value})
        }
        console.log(form)
    }

    const addPostHandler = async () => {
        console.log(form.photo.length)
        console.log(form.photo)
        if (form.photo == '') {
            setErrorMessage("Необходимо добавить фото");
            return;
        }
        if (form.city == "") {
            setErrorMessage("Необходимо выбрать город");
            return;
        }
        if (form.description.length > 128) {
            setErrorMessage("Комментарий должен быть меньше 128 символов");
            return;
        }
        try {
            console.log("buff3" + form.photo)
            await axios.post('/post', {...form}, {
                headers:
                    {
                        'Context-Type': 'application/json'
                    }
            })
                .then(response => {
                    console.log(response)
                    setErrorMessage(response.data.message + "    Вы будете перенаправлены на страницу профиля через 5 секунд")
                    setTimeout(() => setRedirect(true), 5000)
                })
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message)
        }
    }

    if (redirect) {
        return (
            <Redirect to='/profile'/>
        )
    }

    return (
        <div>
            <div className='addPost'>
                <div className='center back'>
                    <div className='center photo'>
                        <div className="input__wrapper">
                            <input name="photo" type="file" id="input__file" className="input input__file" onChange={changeForm}/>
                            <label htmlFor="input__file" className="input__file-button">
                                <div className="input__file-icon-wrapper"><img className="input__file-icon" src="https://cdn-icons-png.flaticon.com/512/70/70310.png"  alt="Добавить изображение" width="300px" height="300px"/></div>
                            </label>
                        </div>
                    </div>
                    <div style={{width: '80%', margin: 'auto', textAlign: 'left'}}>
                        <CityCombobox className="city" name="city"/>
                    </div>
                    <div className='description'>
                        <input
                            className="input"
                            type="text"
                            placeholder="Описание"
                            name="description"
                            onChange={changeForm}
                        />
                    </div>

                    <button className='button' onClick={addPostHandler}>ЗАГРУЗИТЬ ФОТО</button>
                    {errorMessage && <div className="error"> {errorMessage} </div>}
                </div>
            </div>
        </div>
    )
}

export default AddPostPage