import { createUseStyles } from 'react-jss';
import { style } from './style';
import { ItemCategory } from '../itemCategory/ItemCategory';

export const Categories = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesTitle}>Категории</div>
      <ItemCategory />
      <ItemCategory />

      <ItemCategory />

      <ItemCategory />
    </div>
  );
};
