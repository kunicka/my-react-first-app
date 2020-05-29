import React from "react";
import DreamCard from "./DreamCard";

function MainContent() {
  

  return (
    <div className="dreamMainContainer">
      <main>
        
        <p> Pamiętaj, po co to robisz: </p>
        <DreamCard
        dream = {{name:"uśmiechnij się", imgUrl:"https://thesoundofbeingok.files.wordpress.com/2018/03/happy2.jpg?w=434&h=337", alt:"1"}}
        />
        <DreamCard
        dream = {{name:"wyprostuj się", imgUrl:"https://forum-gratuit-dusud.com/wp-content/uploads/2020/01/family-travel.jpg", alt:"2",description: "nic dodać, nic ująć"}}
        />
        <DreamCard
        dream = {{name:"pomyśl o czymś miłym", imgUrl:"https://www.gap360.com/tpl/lib/img/public/compressed-images/tpl/lib/img/private/media/687-original-1480x1004-85.jpeg", alt:"3"}}
        />
        <DreamCard
        dream = {{name:"i co jest Twoim celem na dziś", imgUrl:"https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto:eco,f_auto,fl_progressive:steep,w_1200,h_495/ilb3y7l9aubmdzyqv6ra", alt:"3"}}
        />
        
      </main>
    </div>
  );
}
export default MainContent;
