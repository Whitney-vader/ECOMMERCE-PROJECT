import { createAuthProvider } from 'react-token-auth';

const storage = window.localStorage; // or window.sessionStorage

export const { useAuth, authFetch, login, logout } = createAuthProvider({
  getToken: () => storage.getItem('token'),
  storage,
  onUpdateToken: (token) =>
    fetch('/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: token.refresh_token }),
    })
      .then((response) => response.json())
      .then((data) => data.access_token),
});
