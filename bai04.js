var calTip
var bill = 275;
var tinhpercentTip = 0.15 * (bill >= 50 && bill <= 300) + 0.2 * (bill < 50 && bill > 300)
var tip = tinhpercentTip * bill
var totalbill = bill + tip
console.log("The bill was " + bill + " the tip was " + tip + " and the total value  " + totalbill);