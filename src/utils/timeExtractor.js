const timeExtractor = (date, time) => {
  const date1 = new Date(date);
  const year = date1.getFullYear();
  const month = date1.getMonth() + 1;
  const day = date1.getDate();

  const a = time.split(':');
  const min = a[0];
  const sec = a[1];

  return {
    year,
    month,
    day,
    min,
    sec,
  };
};

export default timeExtractor;
