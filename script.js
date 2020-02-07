let url = 'https://swapi.co/api/'

fetch("https://swapi.co/api/people/1/")
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });