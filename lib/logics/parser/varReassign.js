const valueTransform = require("../../utils/valueTransform");

const varReassign = (msg) => {
  let format = /ganti ([a-zA-Z_]+[a-zA-Z0-9_]*) jadi ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `${match[1]} = ${valueTransform(match[2])};`,
  };
};

module.exports = varReassign;
