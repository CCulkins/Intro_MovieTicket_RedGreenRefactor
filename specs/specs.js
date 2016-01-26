describe("Ticket",function(){
  it("will create a constructor with these specifications", function(){
    var newTicket = new Ticket("evening", "new", "reg");
    expect(newTicket.time).to.equal("evening");
    expect(newTicket.movie).to.equal("new");
    expect(newTicket.age).to.equal("reg");
  });
});
