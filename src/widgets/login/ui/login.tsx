"use client"

import Button, { Input } from '@/shared'
import { useState } from 'react'
import styles from './login.module.css'

export default function Login({isActive} : {isActive : boolean}) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function sendAuthData() {

    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.column}>
                    <label className={styles.label}>Email:</label>
                    <Input onChange={(event) => setEmail(event.target.value)} 
                        value={email} 
                        placeholder='example@gmail.com'/>
                </div>

                <div className={styles.column}>
                    <label className={styles.label}>Пароль:</label>
                    <Input onChange={(event) => setPassword(event.target.value)} 
                        value={password} 
                        type='password' 
                        placeholder='Пароль'/>
                </div>

                <Button onChange={sendAuthData}>Авторизоваться</Button>
            </div>
        </div>
    )
}