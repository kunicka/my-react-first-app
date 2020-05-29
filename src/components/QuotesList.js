import React from "react";
import Quotes from "./Quotes"
import quotesDataBase from "./dataBases/QuotesDataBase";

function QuotesList () {
    const quotesList = quotesDataBase.map(item=> <Quotes item={item} key={item.id} quote={item.quote} author={item.author}/>)
    let randomQuote = quotesList[Math.floor(Math.random()*quotesList.length)];

    return(
<div className="todo-item">
    <div className="display-block">
    <h2>GET INSPIRED</h2>
    {randomQuote}
    </div>
</div>
    )
}

export default QuotesList