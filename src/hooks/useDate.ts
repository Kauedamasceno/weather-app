export const DateNow = () => {
  const date = new Date();
  // hours
  let Hour: number | String = date.getHours();
  let Minute: number | String = date.getMinutes();
  // week
  let DayWeek = date.getDay();
  let DayOfWeekString = DayWeek.toString();
  // month
  let DateMonth = date.getDate();
  let Month = date.getMonth() + 1;
  let MonthString = Month.toString();

  switch (DayOfWeekString) {
    case "0":
      DayOfWeekString = "Domingo";
      break;
    case "1":
      DayOfWeekString = "Segunda-feira";
      break;
    case "2":
      DayOfWeekString = "Terça-feira";
      break;
    case "3":
      DayOfWeekString = "Quarta-feira";
      break;
    case "4":
      DayOfWeekString = "Quinta-feira";
      break;
    case "5":
      DayOfWeekString = "Sexta-feira";
      break;
    case "6":
      DayOfWeekString = "Sabado";
      break;
  }
  switch (MonthString) {
    case "1":
      MonthString = "Jan";
      break;
    case "2":
      MonthString = "Fev";
      break;
    case "3":
      MonthString = "Mar";
      break;
    case "4":
      MonthString = "Abr";
      break;
    case "5":
      MonthString = "Mai";
      break;
    case "6":
      MonthString = "Jun";
      break;
    case "7":
      MonthString = "Jul";
      break;
    case "8":
      MonthString = "Ago";
      break;
    case "9":
      MonthString = "Set";
      break;
    case "10":
      MonthString = "Out";
      break;
    case "11":
      MonthString = "Nov";
      break;
    case "12":
      MonthString = "Dez";
      break;
  }

  // String
  let Year: number | String = date.getFullYear();
  let HourString = Hour.toString();
  let MinuteString = Minute.toString();

  Hour = Hour < 10 ? (HourString = "0" + Hour) : Hour;
  Minute = Minute < 10 ? (MinuteString = "0" + Minute) : Minute;
  Year = Year.toString().slice(2);
  const DateFinal = `${HourString}:${MinuteString} - ${DayOfWeekString},${DateMonth} ${MonthString} ´${Year}`;

  return DateFinal;
};
