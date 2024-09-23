export function updateObjectWithModel<T>(obj: T, updates: Partial<T>): T {
  const updatedObject = { ...obj, ...updates };
  return updatedObject;
}
