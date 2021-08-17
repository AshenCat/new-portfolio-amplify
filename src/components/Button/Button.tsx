import React from 'react'
import './button.scss'

type Props = {
    className?: string;
    style?: {
        [key: string]: string
    };
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    dataText?: string
}

function Button(props: Props) {
    return (
        <button
            className={`${props.className} _btn`}
            onClick={props.onClick}
            style={props.style}
            data-text={props.children}
            >
            {props.children}
        </button>
    )
}

export default Button
