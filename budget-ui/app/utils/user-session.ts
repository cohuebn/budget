import { User } from "firebase/auth";

const userKey = "user";

export function setSessionUser(user: User) {
  sessionStorage.setItem(userKey, JSON.stringify(user));
}

export function getSessionUser(): User | null {
  const sessionItem = sessionStorage.getItem(userKey);
  return sessionItem ? (JSON.parse(sessionItem) as User) : null;
}
