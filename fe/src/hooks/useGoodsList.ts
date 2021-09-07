import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGoodsList() {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/goods';
    axios.get(apiUrl).then((resp) => {
      const allGoods = resp.data;
      setAppState(allGoods);
    });
  }, [setAppState]);
  return appState;
}
