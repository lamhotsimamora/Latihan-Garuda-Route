"use strict";
let datafire = require('datafire');

module.exports = new datafire.Action({
  description: "home",
  handler: async (input, context) => {
	 console.log("Data Fire Run !");
  },
});
