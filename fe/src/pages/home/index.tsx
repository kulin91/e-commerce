import { style } from './style';
import { createUseStyles } from 'react-jss';
import { Good } from '../../components/good/Good';
import useGoods from '../../hooks/useGoods';
import { Categories } from '../../components/categories/Categories';

export const HomePage = () => {
  const { goods, selectedCategoryIndex, setSelectCategoryIndex, categories } = useGoods();

  const useStyles = createUseStyles(style);
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.categoriesContainer}>
        <Categories
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectCategoryIndex={setSelectCategoryIndex}
          categories={categories}
        />
      </div>
      <div className={classes.goodsBox}>
        <div className={classes.goodsContainer}>
          {goods.map((item: object, index: any) => (
            <Good key={item + index} item={item} />
          ))}
        </div>
      </div>
    </div>
    // <div className={classes.goodsContainer}>Good</div>
  );
};
