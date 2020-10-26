import React from 'react';
import './QuoteCard.css';

function QuoteCard({ simpson }) {
  return (
    <div className='QuoteCard'>
      <img src={simpson.image} alt={simpson.name} />
      <h1>{simpson.character}</h1>
      <p>{simpson.quote}</p>
    </div>
  );
}

export default QuoteCard;

/*const simpsonsHtml = `
<p><strong>${simpson[0].character}</strong></p>
<p>${simpson[0].quote}</p>
<img src="${simpson[0].image}" />
`;
document.querySelector('#simpson').innerHTML = simpsonsHtml;
});*/
