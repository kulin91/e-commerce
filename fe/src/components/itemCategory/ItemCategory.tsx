import { createUseStyles } from 'react-jss';
import useGoods from '../../hooks/useGoods';
import { style } from './style';

export const ItemCategory = (props: any) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const { setSelectCategoryIndex } = useGoods();
  console.log(props.onPress);

  return (
    <div
      className={classes.itemCategoryContainer}
      onClick={() => setSelectCategoryIndex(props.onPress)}>
      {props.title}
    </div>
  );
};
