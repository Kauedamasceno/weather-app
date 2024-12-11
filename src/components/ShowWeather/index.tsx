import { useContext, useEffect, useState } from "react";
import { DateNow } from "../../hooks/useDate";

import { SearchContext } from "../../Context/SearchContext";

const ShowWeather = () => {
  const [date, setDate] = useState(DateNow());

  const { search } = useContext(SearchContext);
  //let date = DateNow()

  useEffect(() => {
    const time = setInterval(() => {
      setDate(DateNow());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [date]);

  if (search)
    return (
      <div className="flex max-md:justify-center max-md:flex-col  max-md:items-center max-md:text-center ">
        <h1 className="text-8xl max-sm:text-6xl">
          {Math.floor(search.main.temp)}&deg;{" "}
        </h1>
        <div className="ml-3 flex flex-col justify-end ">
          <h2 className="inline-block mr-1 text-6xl font-bold max-lg:text-4xl">
            {search.name}
          </h2>
          <p className="text-2xl max-lg:text-base">{date}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${search.weather[0].icon}@2x.png`}
          alt=""
          className="h-24 max-sm:h-auto max-sm:w-3/12"
        />
      </div>
    );
};

export default ShowWeather;
