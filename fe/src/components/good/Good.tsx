import { createUseStyles } from 'react-jss';
import { style } from './style';
import React, { useState } from 'react';



export const Good = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <div className={classes.goodContainer}>
      <div className={classes.goodImg}></div>
      <div className={classes.containerForBox}>
        <div className={classes.boxForDescription}>
          <div className={classes.goodTitle}>Title</div>
          <div className={classes.goodDescription}>Description cri cri criptio tion cri cri cri tion cri cri cri tion cri cri. </div>
        </div>
        <div className={classes.boxForPrice}>10$</div>
      </div>
      <div className={classes.boxForButton}>
        <div className={classes.containerForQuantity}>
          <button onClick={() => setCount(count - 1)} disabled={count === 0} className={classes.changeQuantity}>-</button>
          <div className={classes.quantity}>{count}</div>
          <button onClick={() => setCount(count + 1)} className={classes.changeQuantity}>+</button>
        </div>
        <button onClick={() => console.log(count)} disabled={count === 0} className={classes.addToBasket}>Добавить в корзину</button>
      </div>
    </div>
  )
}