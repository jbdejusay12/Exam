const number = (n)=>{
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
          let sub =  n - i + 1
          if (j >= sub) {
            row += "*";
          } else {
            row += "-";
          }
        }
        console.log(row);
      }
}

number(7);