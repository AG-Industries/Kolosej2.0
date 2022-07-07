import React, { useEffect, useState } from "react";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar";


const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const handleDateChange = (e) => setSelectedDate(e.target.value);
  return (
    <>
      <Navbar handleDateChange={handleDateChange} selectedDate={selectedDate}/>
      <Movies date={selectedDate}  />
    </>
  );
};

export default App;
