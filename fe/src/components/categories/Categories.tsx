import { createUseStyles } from 'react-jss';
import { style } from './style';
import { ItemCategory } from '../itemCategory/ItemCategory';
import GetGoods from '../../hooks/GetGoods';

export const Categories = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const items = GetGoods();

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesTitle}>Категории</div>
      {items.categories.map((item, index) => (
        <ItemCategory key={item[index]} title={item} />
      ))}
    </div>
  );
};
