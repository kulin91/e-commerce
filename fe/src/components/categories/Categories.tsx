import { createUseStyles } from 'react-jss';
import { style } from './style';
import { ItemCategory } from '../itemCategory/ItemCategory';

type Props = Readonly<{
  selectedCategoryIndex: number;
  setSelectCategoryIndex: (index: number) => void;
  categories: string[];
}>;

export const Categories = (props: Props) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  const { selectedCategoryIndex, setSelectCategoryIndex, categories } = props;

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesTitle}>Категории</div>
      {categories.map((item, index) => (
        <ItemCategory
          onPress={setSelectCategoryIndex}
          index={index}
          key={categories[index]}
          title={item}
          selectedCategoryIndex={selectedCategoryIndex}
        />
      ))}
    </div>
  );
};
