import { HTMLInputTypeAttribute, ChangeEvent } from "react";
import styles from './input.module.css'

interface Input {
    type?: HTMLInputTypeAttribute,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string,
    placeholder: string,
    width?:string
}

export function Input({onChange, type, value, placeholder, width} : Input) {
    return (
        <input style={{width: width}} className={styles.input} onChange={onChange} type={type} value={value} placeholder={placeholder}/>
    )
}