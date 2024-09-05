export const DateNow = () => {
  const date = new Date()
  // hours
  let Hour: number|String = date.getHours()
  let Minute: number|String = date.getMinutes() 
  // week
  let DayWeek = date.getDay()
  let DayOfWeekString = DayWeek.toString()
  // month
  let DateMonth = date.getDate()
  let Month = date.getMonth() + 1
  let MonthString = Month.toString()

  switch (DayOfWeekString) {
    case '0': DayOfWeekString = 'Sunday'; break;
    case '1': DayOfWeekString = 'Monday'; break;
    case '2': DayOfWeekString = 'Tuesday'; break;
    case '3': DayOfWeekString = 'Wednesday'; break;
    case '4': DayOfWeekString = 'Thursday'; break;
    case '5': DayOfWeekString = 'Friday'; break;
    case '6': DayOfWeekString = 'Saturday'; break;
  }
  switch (MonthString) {
    case '1': MonthString = 'Jan'; break;
    case '2': MonthString = 'Feb'; break;
    case '3': MonthString = 'Mar'; break;
    case '4': MonthString = 'Apr'; break;
    case '5': MonthString = 'May'; break;
    case '6': MonthString = 'Jun'; break;
    case '7': MonthString = 'Jul'; break;
    case '8': MonthString = 'Aug'; break;
    case '9': MonthString = 'Sep'; break;
    case '10': MonthString = 'Oct'; break;
    case '11': MonthString = 'Nov'; break;
    case '12': MonthString = 'Dec'; break;
  }

  // String  
  let Year:number | String = date.getFullYear()
  let HourString = Hour.toString()
  let MinuteString = Minute.toString()

  Hour = Hour < 10 ? HourString = '0' + Hour : Hour 
  Minute = Minute < 10 ? MinuteString = '0' + Minute : Minute
  Year = Year.toString().slice(2)
  const DateFinal = `${HourString}:${MinuteString} - ${DayOfWeekString},${DateMonth} ${MonthString} ´${Year}`
  
  return DateFinal


}