function ticketPrinter(tickets, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];
  tickets.map((ticket) => {
    let [destination, price, status] = ticket.split("|");
    price = Number(price);
    result.push(new Ticket(destination, price, status));
  });

  if (sortCriteria === "price") {
    result.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
  } else {
    result.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
  }

  return result;
}
console.log(
  ticketPrinter(
    [
      "Philadelphia|94.20|vailable",
      "New York City|95.99|vailable",
      "New York City|95.99|Asold",
      "ZBoston|162.20|Departed",
    ],
    "status"
  )
);
