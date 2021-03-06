export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => {
    return setTimeout(resolve, ms);
  });
};
