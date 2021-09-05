import { style } from './style';
import { createUseStyles } from 'react-jss';
import { Good } from '../../components/good/Good';
import GetGoods from '../../hooks/GetGoods';

export const HomePage = () => {
  const goodsArray = GetGoods();

  const useStyles = createUseStyles(style);
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.categoriesContainer}>Сategories</div>
      <div className={classes.goodsBox}>
        <div className={classes.goodsContainer}>
          {goodsArray.map((item, index) => (
            <Good key={item + index} item={item} />
          ))}
        </div>
      </div>
    </div>
    // <div className={classes.goodsContainer}>Good</div>
  );
};
