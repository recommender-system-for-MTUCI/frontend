import { ReactElement } from "react";
import styles from './button.module.css'

interface Button {
    onClick: () => void,
    children: string,
    width?: string
}

export default function Button({onClick, children, width} : Button) {
    return <button style={{width: width}} className={styles.button} onClick={onClick} >{children}</button>
}