"use client"

import Button, { Input } from '@/shared'
import { useState } from 'react'
import styles from './registration.module.css'

export default function Registration() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [code, setCode] = useState<string>('')
    const [isCodeSended, setIsCodeSended] = useState<boolean>(false)

    function sendAuthData() {

    }

    function getCode() {
        setIsCodeSended(true)
        console.log(isCodeSended)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.column}>
                    <label className={styles.label}>Email:</label>
                    <div className={styles.containerCode}>
                        <Input width='65%' onChange={(event) => setEmail(event.target.value)} 
                            value={email} 
                            placeholder='example@gmail.com'/>
                        <Button width='30%'  onClick={() => getCode()} >Получить код</Button>
                    </div>
                </div>

                {
                    isCodeSended && <div className={styles.column}>
                        <label className={styles.label}>Код:</label>
                        <div className={styles.containerCode}>
                            <Input width='65%' onChange={(event) => setCode(event.target.value)} 
                                value={code} 
                                placeholder='example@gmail.com'/>
                            <Button width='30%'  onClick={() => {}} >Подтвердить</Button>
                        </div>
                    </div>

                }
               
                <div className={styles.column}>
                    <label className={styles.label}>Пароль:</label>
                    <Input onChange={(event) => setPassword(event.target.value)} 
                        value={password} 
                        type='password' 
                        placeholder='Пароль'/>
                </div>

                <Button onClick={sendAuthData}>Авторизоваться</Button>
            </div>
        </div>
    )
}