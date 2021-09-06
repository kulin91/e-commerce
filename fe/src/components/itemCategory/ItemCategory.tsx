import { createUseStyles } from 'react-jss';
import { style } from './style';

export const ItemCategory = (props: any) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();

  return (
    <div className={classes.itemCategoryContainer} onClick={() => console.log(props.title)}>
      {props.title}
    </div>
  );
};
