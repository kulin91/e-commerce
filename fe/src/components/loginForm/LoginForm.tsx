import { createUseStyles } from 'react-jss';
import { style } from './style';

export const LoginForm = (item: any) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();

  return (
    <div className={classes.loginFormConainer}>
      <div className={classes.loginFormBox}>
        <div className={classes.boxForInput}>
          {/* <div>Логин</div> */}
          <input placeholder="Логин" type="text" className={classes.inputField}></input>
        </div>
        <div className={classes.boxForInput}>
          {/* <div>Пароль</div> */}
          <input placeholder="Пароль" type="password" className={classes.inputField}></input>
        </div>
        <div className={classes.boxForButton}>
          <input value="Отправить" type="button" className={classes.buttonSend}></input>
        </div>
      </div>
    </div>
  );
};
