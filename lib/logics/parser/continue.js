const continueStatement = (msg) => {
	let format = /lanjuik/;
	let match = msg.match(format);
	if (!match) return null;
  
	return {
	  exp: `continue;`,
	};
  };
  
  module.exports = continueStatement;
  