import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BasketPage } from '../../pages/basket';
import { HomePage } from '../../pages/home';
import { LoginPage } from '../../pages/login';
import { style } from './style';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';

export const Header = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const [active, setActive] = useState(1);
  return (
    <Router>
      <div className={classes.header}>
        <div className={classes.containerForLinks}>
          <Link
            onClick={() => {
              setActive(0);
            }}
            className={active === 0 ? classes.linkActive : classes.link}
            to="/login">
            Зайти<br></br>как администратор
          </Link>
        </div>
        <div className={classes.containerForLinks}>
          <Link
            onClick={() => {
              setActive(1);
            }}
            className={active === 1 ? classes.linkActive : classes.link}
            to="/goods">
            Товары
          </Link>
        </div>
        <div className={classes.containerForLinks}>
          <div className={classes.boxForPriceLink}>
            <Link
              onClick={() => {
                setActive(2);
              }}
              className={active === 2 ? classes.linkActive : classes.link}
              to="/basket">
              Корзина
              <div className={classes.priceLink}>0$</div>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/basket">
          <BasketPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
