import {useState, useEffect} from 'react';
import {logIn} from 'api/logIn';

export const useAuthToken = (username: string, password: string) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        let localToken = localStorage.getItem('token');

        if (!localToken) {
          console.log('No token found, logging in...');
          localToken = await logIn(username, password);
          localStorage.setItem('token', localToken);
        }

        setToken(localToken);
      } catch (error) {
        console.error('Failed to login and fetch token:', error);
      }
    };

    fetchToken();
  }, [username, password]);

  return token;
};
