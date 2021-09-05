import { createUseStyles } from 'react-jss';
import { style } from './style';
import React, { useState } from 'react';

export const Good = (item: any) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const good = item.item;

  return (
    <div className={classes.goodContainer}>
      <div className={classes.goodImg}></div>
      <div className={classes.containerForBox}>
        <div className={classes.boxForDescription}>
          <div className={classes.goodTitle}>{good.title}</div>
          <div className={classes.goodDescription}>{good.description}</div>
        </div>
        <div className={classes.boxForPrice}>{good.price}$</div>
      </div>
      <div className={classes.boxForButton}>
        <div className={classes.containerForQuantity}>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            className={classes.changeQuantity}>
            -
          </button>
          <div className={classes.quantity}>{count}</div>
          <button onClick={() => setCount(count + 1)} className={classes.changeQuantity}>
            +
          </button>
        </div>
        <button
          onClick={() => console.log(count)}
          disabled={count === 0}
          className={classes.addToBasket}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
