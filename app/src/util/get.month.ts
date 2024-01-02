const getMonths = () => {
  const months = [];
  for (let i = 1;i <= 12;i++) {
    months.push({ id: i, name: new Date(2020, i - 1, 1).toLocaleString('default', { month: 'long' }) });
  }
  return months;
}

export default getMonths