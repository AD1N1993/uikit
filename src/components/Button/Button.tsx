import React from 'react';
import cn from "classnames";
import {IButton} from "./IButton";
import s from "./Button.scss"

const Button: React.FC<IButton> = ({
                                     attrs,
                                     children,
                                     className,
                                     disabled,
                                     onClick,
                                     size = 'l',
                                     theme = 'light',
                                     variant
                                   }) => {

  const classes = cn(s.btn, {
    className,
    [s['btn--disabled']]: disabled,
    [s[`btn--${theme}`]]: theme,
    [s[`btn--${theme}-${variant}`]]: variant,
    [s[`btn--${size}`]]: size,
  })

  const Tag = attrs?.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

export default Button
