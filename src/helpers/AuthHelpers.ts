// AuthHelpers.ts
const getGroups = (user: any): string[] => {
  return user?.signInUserSession?.idToken.payload["cognito:groups"] || [];
};

export const isUser = (user: any): boolean => {
  const groups = getGroups(user);
  return groups.includes("Users");
};

export const isStand = (user: any): boolean => {
  const groups = getGroups(user);
  return groups.includes("Stand");
};

export const isRef = (user: any): boolean => {
  const groups = getGroups(user);
  return groups.includes("Refs");
};

export const isAdmin = (user: any): boolean => {
  const groups = getGroups(user);
  return groups.includes("Admins");
};
