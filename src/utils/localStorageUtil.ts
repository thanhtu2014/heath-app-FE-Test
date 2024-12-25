import { StorageKey } from '@/constants';

interface AuthUser {
  access: string;
  refresh?: string;
  [key: string]: any; // Allows for additional properties
}

export function getAuthUser(): AuthUser | null {
  try {
    return JSON.parse(localStorage.getItem(StorageKey.authUser) || 'null');
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function setAuthUser(user: AuthUser): void {
  localStorage.setItem(StorageKey.authUser, JSON.stringify(user));
}

export function removeAuthUser(): void {
  localStorage.removeItem(StorageKey.authUser);
}

export function getLocalRefreshToken(): string | undefined {
  const user = getAuthUser();
  return user?.refresh;
}

export function getLocalAccessToken(): string | undefined {
  const user = getAuthUser();
  return user?.access;
}

export function updateLocalAccessToken(token: string): void {
  if (token) {
    const user = getAuthUser();
    if (user) {
      setAuthUser({ ...user, access: token });
    }
  }
} 