
fetch('https://api.seatgeek.com/2/events?client_id=MzM0NjE4NzV8MTY4MzI1MDU0MS4yMjMwNDY')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    })
