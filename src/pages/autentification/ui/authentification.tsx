"use client"
import Login from "@/widgets/login";
import { useState } from "react";
import styles from './authentification.module.css'
import Registration from "@/widgets/registration";

export default function Authentification() {
    const [isLogin, setIsLogin] = useState<boolean>(true)

    return (
        <div className={styles.container}>
            <div className={styles.containerSelectOption}>
                <span className={ isLogin ? styles.selectedOption : styles.option} 
                    onClick={() => {setIsLogin(true)}}>
                    Логин
                </span>

                <span className={ isLogin ? styles.option : styles.selectedOption} 
                    onClick={() => setIsLogin(false)}>
                    Регистрация
                </span>

            </div>
            {
                isLogin ? 
                <Login isActive={isLogin}/>
                :
                <Registration/>
            }
        </div>
    )
}