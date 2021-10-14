import moment from "moment";

console.log(moment.now()); //number of seconds since "Unix Epoch";
//1634078600354
//1634078672239

const rightNow = moment();
console.log(rightNow);

const birthday = moment('07/04/1990', 'MM/DD/YYYY');
console.log(birthday.format("MMM Do ddd"));
console.log(birthday.fromNow());
console.log(birthday.format('ddd'))

const twoWeeksFromNow = moment().add(2, "weeks");
console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, "months");
console.log(sixMonthsAgo.toString());
