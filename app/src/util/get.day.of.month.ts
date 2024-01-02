const getDaysOfMonth = (month: number, year: number): { day: number, dayName: string }[] => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days: { day: number, dayName: string }[] = [];

  for (let i = 1;i <= daysInMonth;i++) {
    const date = new Date(year, month - 1, i);
    const dayName = date.toLocaleString('default', { weekday: 'short' });
    days.push({ day: i, dayName });
  }

  return days;
}

export default getDaysOfMonth