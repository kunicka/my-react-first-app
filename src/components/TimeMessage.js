import React from "react";

function TimeMessage() {
  const date = new Date();
  const hours = date.getHours();
  
  let info;

  

  if (hours >= 6 && hours < 9) {
    info =
      " Jeszcze przed 9:00! Pamiętaj, że Twoja produktywność jest teraz największa!To będzie dobry dzień! Do dzieła!";
    
  } else if (hours >= 9 && hours < 10.5) {
    info =
      "Wybiła godzina 9:00! Już za chwilę Stand Up. Postaraj dobrze zakończyć poranny etap pracy i przygotować się do Stand Upu.";
   
  } else if (hours >= 10.5 && hours < 12) {
    info =
      "No i po spotkanku. Zaczynam kolejną fazę pracy. Jeśli czujesz, że emocje opadły, to jest to czas na kawę. Jest jeszcze sporo do nauczenia, więc nie zwalniaj i działamy dalej!";
    
  } else if (hours >= 12 && hours < 13.5) {
    info =
      "Uwaga, minęła 12:00! Nie zwalniamy tempa, aaaaale... Zasłużyłaś na przekąskę. Zajrzyj do lodówki, tam na pewno czeka na Ciebie małe co-nieco. BADUMTSSSS! Wracaj szybko! React czeka!";
    
  } else if (hours >= 13.5) {
    info =
      "TADAAAAAM! Zrobiłaś dziś dużo, gratulacje! Jednak pamiętaj, to najbardziej challenging moment w ciągu dnia! A to oznacza, że należy się spiąć na maksa! Pamiętaj o gimnastyce i piciu wody! Zaraz koniec pracy, ale początek Twojego czasu wolnego! Jeszcze chwilka! Nie odpuszczaj! Bądź profesjonalna.";
    
  } else {
    info = "Zrób coś dla siebie - to Twój wolny czas.";
    
  }
  return (
    <div className="time-message">
      <p>{info}</p>
    </div>
  );
}

export default TimeMessage;
