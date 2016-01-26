describe("Ticket",function(){
  it("will create a Ticket with these specifications", function(){
    var testTicket = new Ticket("evening", "new", "reg");
    expect(testTicket.time).to.equal("evening");
    expect(testTicket.movie).to.equal("new");
    expect(testTicket.age).to.equal("reg");
  });
  it("return formatted string with the 3 variants", function() {
    var testTicket = new Ticket("day", "old", "senior");
    expect(testTicket.fullInfo()).to.equal("day, old, senior");
  });
  it("return the price of the ticket", function(){
    var testTicket = new Ticket("day", "old", "senior");
    expect(testTicket.ticketPrice()).to.equal(5);
  });
});
