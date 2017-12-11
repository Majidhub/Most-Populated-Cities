const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // loading the json file
  const input = req.body;

  // Making the json file to an array of arrays
  const items = Object.keys(input).map(key => [key, input[key]]);

  //sorting it for easier access to the top three cities
  items.sort((first, second) => second[1] - first[1]);

  //getting the top three cities, or less if we are given less than three
  const mostPopulated = items.slice(0, Math.min(3, items.length));

  // Making the three most populated cities back to a json file
  let mostPop = {};
  for (const city of mostPopulated) {
      mostPop[city[0]] = city[1];
  }

  // responding to the API with the most populated cities we found
  res.json(mostPop);
});

module.exports = router;
