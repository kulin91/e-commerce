import { style } from './style';
import { createUseStyles } from 'react-jss';
import { Good } from '../../components/good/Good';

export const HomePage = () => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.categoriesContainer}>Сategories</div>
      <div className={classes.goodsBox}>
      <div className={classes.goodsContainer}>
        <Good/>
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
      </div>
    </div>
    </div>
    // <div className={classes.goodsContainer}>Good</div>
  )
}