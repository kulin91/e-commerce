import { createUseStyles } from 'react-jss';
import { style } from './style';

export const ItemCategory = (props: any) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const { onPress, index, selectedCategoryIndex } = props;

  return (
    <div
      className={
        index === selectedCategoryIndex
          ? classes.itemCategoryContainerActive
          : classes.itemCategoryContainer
      }
      onClick={() => {
        onPress(index);
      }}>
      {props.title}
    </div>
  );
};
