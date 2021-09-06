import axios from 'axios';
import { useEffect, useState } from 'react';

const categoriesFiltersConfig = [
  {
    name: 'Все товары',
    filter: (values: any) => values,
  },
  {
    name: 'Автомобили',
    filter: (values: any) => {
      const result = null;

      return result;
    },
  },
  {
    name: 'Самолёты',
    filter: (values: any) => {
      let max = values[0];
      for (let i = 0; i < values.length; i++) {
        if (values[i].speed > max.speed) max = values[i];
      }
      return [max];
    },
  },
];

const categories = categoriesFiltersConfig.map((x) => x.name);

export default function useGoods() {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/goods';
    axios.get(apiUrl).then((resp) => {
      const allGoods = resp.data;
      setAppState(allGoods);
    });
  }, [setAppState]);
  console.log(appState);

  return { appState, categories };
}
