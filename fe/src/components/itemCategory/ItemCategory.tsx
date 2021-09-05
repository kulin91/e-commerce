import { createUseStyles } from 'react-jss';
import { style } from './style';

export const ItemCategory = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();

  return (
    <div className={classes.itemCategoryContainer} onClick={() => console.log(1)}>
      1
    </div>
  );
};
