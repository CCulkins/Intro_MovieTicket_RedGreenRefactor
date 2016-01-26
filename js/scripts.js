function Ticket(time, movie, age) {
this.time = time;
this.movie = movie;
this.age = age;
}

Ticket.prototype.fullInfo = function () {
  return this.time + ", " + this.movie + ", " + this.age;
};

Ticket.prototype.ticketPrice = function () {
  if(this.time === "day" && this.movie === "old" && this.age === "senior"){
    return 5;
  }else if(this.time === "day" && this.movie === "old" && this.age === "reg"){
    return 6;
  }else if(this.time === "day" && this.movie=== "new" && this.age ==="senior"){
    return 7;
  }else if(this.time === "day" && this.movie ===  "new" && this.age === "reg"){
    return 8;
  }else if(this.time === "evening" && this.movie === "old" && this.age === "senior"){
    return 10;
  }else if(this.time === "evening" && this.movie === "old" && this.age === "reg"){
    return 11;
  }else if(this.time === "evening" && this.movie === "new" && this.age === "senior"){
    return 12;
  }else{
    return 13;
  }
};
