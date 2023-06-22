const getUserDayTime = () => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const hourMinutes = date.getHours() + ':' + date.getMinutes();

  const daysDaysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  // const nextDays = daysDaysOfWeek.map((day) => {
  //   nextDay++;
  //   if (nextDay > 6) {
  //     nextDay = 0;
  //   }
  //   return daysOfWeek[nextDay];
  // });

  const userDayTime = {
    currentDay: daysDaysOfWeek[day],
    currentHour: hour.toString().length === 1 ? '0' + hour : hour,
    currentMinutes: minutes.toString().length === 1 ? '0' + minutes : minutes,
    day: day,
    daysDaysOfWeek: daysDaysOfWeek,
  };

  return userDayTime;
};

export default getUserDayTime;
