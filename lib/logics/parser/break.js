const breakStatement = (msg) => {
	let format = /baranti/;
	let match = msg.match(format);
	if (!match) return null;
  
	return {
	  exp: `break;`,
	};
  };
  
  module.exports = breakStatement;
  