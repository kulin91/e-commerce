import { style } from './style';
import { createUseStyles } from 'react-jss';
import { LoginForm } from '../../components/loginForm/LoginForm';

export const LoginPage = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  return (
    <div className={classes.loginPageContainer}>
      <LoginForm />
    </div>
  );
};
