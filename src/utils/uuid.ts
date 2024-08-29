export const uuid4 = (length = 8) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  const resultArray = Array.from({length}, () =>
    characters.charAt(Math.floor(Math.random() * charactersLength)),
  );

  return resultArray.join('');
};
