import * as React from 'react';
import './button.scss';
import classNames from 'classnames';

const Button = ({type, text, onClick, disabled = false, className = ''}:
                    {type?: 'blue'| 'white', text: string, onClick: any, disabled?: boolean, className?: string}) => {
    const classes = classNames('button', className, {
        button_blue: type === 'blue',
        button_white: type === 'white'
    });
    return (
        <button className={classes} disabled={disabled} onClick={onClick}>{text}</button>
    );
};

export default Button;
