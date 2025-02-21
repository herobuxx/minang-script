const conditionElse = (msg) => {
  let format = /jiko indak$/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true,
  };
};

module.exports = conditionElse;
