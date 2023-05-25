export const getFormattedTime = (time: number): string => {
  return time.toString().length < 2 ? `0${time}` : `${time}`;
};

export const getParsedTime = (timer: number): number[] => {
  const minutes = Math.floor((timer / 60) % 60);
  const seconds = Math.floor(timer % 60);

  return [minutes, seconds];
};
