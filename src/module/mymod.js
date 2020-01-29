const info = txt => {
  console.log('My text is:', txt);
  return txt;
};

const err = txt => {
  console.log('ERROR :', txt);
  return txt;
};

module.exports.info = info;
module.exports.err = err;
