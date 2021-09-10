import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAdminsList() {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/admins';
    axios.get(apiUrl).then((resp) => {
      const allAdmins = resp.data;
      setAppState(allAdmins);
    });
  }, [setAppState]);
  return appState;
}
