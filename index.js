const { Just, Nothing, maybeToNullable, map, ifElse, compose, equals, prop } = require('./sanctuary'),
      { get_order, send_invoice_ticket, create_guests_for_event, } = require('./order');

let id = process.argv[2];

const is_confirmed = compose(equals(true))(prop('confirmed'));

get_order(id)
  .then(ifElse(is_confirmed)(Just)(() => Nothing))
  .then(map(create_guests_for_event))
  .then(map(send_invoice_ticket))
  .then(maybeToNullable)
  .then(console.log)
;

