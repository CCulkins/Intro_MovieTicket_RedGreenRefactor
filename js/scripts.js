function Ticket(time, movie, age) {
this.time = time;
this.movie = movie;
this.age = age;
}

Ticket.prototype.fullInfo = function () {
  return this.time + ", " + this.movie + ", " + this.age;
};


Ticket.prototype.ticketPrice = function () {
  var price = 5;
  if(this.time === "evening"){
    var timePrice = (price + 5);
  }else{
    var timePrice = price;
  };
  if(this.movie === "new"){
    var moviePrice = (timePrice + 2);
  }else{
    var moviePrice = timePrice;
  };
  if(this.age === "reg"){
    var agePrice = (moviePrice + 1);
  } else {
    var agePrice = moviePrice;
  };

  return agePrice;
};


//Do not do this instead!!!!!

//   if(this.time === "day" && this.movie === "old" && this.age === "senior"){
//     return 5;
//   }else if(this.time === "day" && this.movie === "old" && this.age === "reg"){
//     return 6;
//   }else if(this.time === "day" && this.movie=== "new" && this.age ==="senior"){
//     return 7;
//   }else if(this.time === "day" && this.movie ===  "new" && this.age === "reg"){
//     return 8;
//   }else if(this.time === "evening" && this.movie === "old" && this.age === "senior"){
//     return 10;
//   }else if(this.time === "evening" && this.movie === "old" && this.age === "reg"){
//     return 11;
//   }else if(this.time === "evening" && this.movie === "new" && this.age === "senior"){
//     return 12;
//   }else{
//     return 13;
//   }
// };
