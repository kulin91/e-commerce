import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { BasketPage } from "../pages/basket";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import {style} from './style';
import { createUseStyles } from 'react-jss';

export const Header = () => {
	const useStyles  = createUseStyles(style);
	const classes = useStyles();
	return (
	<Router>
		<div className={classes.header}>
			<div className={classes.containerForLinks}>
				<Link className={classes.link} to="/login">Зайти<br></br>как администратор</Link>
			</div>
			<div className={classes.containerForLinks}>
				<Link className={classes.link} to="/goods">Товары</Link>
			</div>
			<div className={classes.containerForLinks}>
				<div className={classes.boxForPriceLink}>
					<Link className={classes.link} to="/basket">Корзина
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
