const number = (input) =>{
    for (let i = 1; i <= input; i++) {
        if (i % 5 === 0 && i % 7 === 0) {
          console.log("Knose Pet Care Made Easy");
        } else if (i % 5 === 0) {
          console.log("Knose");
        } else if (i % 7 === 0) {
          console.log("Pet Care Made Easy");
        } else {
          console.log(i);
        }
      }
}


number(35);