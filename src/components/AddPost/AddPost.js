import React, { useState } from 'react'
import Header from '../Header/Header'
import style from './AddPost.module.css'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function AddPost() {

    const [nazvaniya, setNazvaniya] = useState('');
    const [opisaniya, setOpisaniya] = useState('')
    const [image, setImage] = useState('')

    const usersCollectionRef = collection(db, 'posts')

    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            title: nazvaniya,
            description: opisaniya,
            image2: image
        });
    }
    return (

        <div className={style.mainAdd}>
            <Header />
            <div className={style.mainPost}>
                <div className={style.mainPostCont}>
                    <h2>Настройки публикации</h2>
                    <div className={style.addInput}>
                        <label >Название</label>
                        <input
                            type="text"
                            placeholder='Text input'
                            onChange={(event) => {
                                setNazvaniya(event.target.value)
                            }}
                        />
                    </div>
                    <div className={style.addInput}>
                        <label >Image Source</label>
                        <input
                            type="text"
                            placeholder='Image input'
                            onChange={(event) => {
                                setImage(event.target.value)
                            }}
                        />
                    </div>
                    <div className={style.addDescript}>
                        <label>Описание</label>
                        <textarea
                            name="opisaniya"
                            id="opisaniya-id"
                            cols="30"
                            rows="10"
                            onChange={(event) => {
                                setOpisaniya(event.target.value)
                            }}
                        >
                        </textarea>
                    </div>

                    <div className={style.addBtn}>
                        <button onClick={createUser}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}