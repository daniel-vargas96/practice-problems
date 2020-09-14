function dayFinder(stringDate) {
  const date = new Date(stringDate);
  const dayOfTheWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  return dayOfTheWeek;
}
