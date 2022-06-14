export const GetTime = (date: string): string => {
  const option: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(date).toLocaleString('ru', option);
};

export const GetDate = (date: string): string => {
  const optionDayMont: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };
  const optionWeekday: Intl.DateTimeFormatOptions = {
    weekday: 'short',
  };
  const d: Date = new Date(date);
  return d.toLocaleString('ru', optionDayMont).concat(' ').concat(d.toLocaleString('ru', optionWeekday));
};

export const GetDuration = (durationInMinutes: number): string => {
  const days: number = Math.floor(durationInMinutes / (24 * 60));
  const hours: number = Math.floor((durationInMinutes - 24 * 60 * days) / 60);
  const minutes: number = durationInMinutes % 60;
  // console.log(durationInMinutes, days, hours, minutes);
  return (days > 0 ? `${days} д ` : '').concat(`${hours} ч ${minutes} мин`);
};
