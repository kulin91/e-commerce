import { createUseStyles } from 'react-jss';
import { style } from './style';
import { ItemCategory } from '../itemCategory/ItemCategory';
import useGoods from '../../hooks/useGoods';

export const Categories = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const items = useGoods();

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesTitle}>Категории</div>
      {items.categories.map((item, index) => (
        <ItemCategory onPress={index} key={item[index]} title={item} />
      ))}
    </div>
  );
};
