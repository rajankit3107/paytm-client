// Authentication utility functions

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
};

export const validateToken = async (): Promise<boolean> => {
  const token = getToken();
  if (!token) return false;

  try {
    // You can add a token validation endpoint here if needed
    // For now, we'll just check if token exists
    return true;
  } catch (error) {
    console.log(error);
    removeToken();
    return false;
  }
};
