import { useState } from 'react';
import useGoodsList from './useGoodsList';

const categoriesFiltersConfig = [
  {
    name: 'Все товары',
    filter: (values: any) => values,
  },
  {
    name: 'Автомобили',
    filter: (values: string[]) => filterCategory(values, 'Автомобили'),
  },
  {
    name: 'Самолёты',
    filter: (values: string[]) => filterCategory(values, 'Самолёты'),
  },
];

const categories = categoriesFiltersConfig.map((x) => x.name);

export default function useGoods() {
  const [selectedCategoryIndex, setSelectCategoryIndex] = useState(0);
  const goodsList = useGoodsList();
  const config = categoriesFiltersConfig[selectedCategoryIndex];
  const goods = config.filter(goodsList);

  return { goods, categories, selectedCategoryIndex, setSelectCategoryIndex };
}

function filterCategory(values: any, category: string) {
  const result: string[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i].category === category) {
      result.push(values[i]);
    }
  }
  return result;
}
