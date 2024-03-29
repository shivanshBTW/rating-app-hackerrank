import './App.css';

import Rating from './Components/Rating/Rating';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  let [rating, setRating] = useState(null);
  let starCount = 5;
  return (
    <div>
      {rating}
      <hr />
      <Rating starCount={starCount} rating={rating} setRating={setRating} />
    </div>
  );
}

export default App;
