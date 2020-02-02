const isValidHostname = (req, res, next) => {
  const validHost = ['localhost', 'fsong.cm'];

  if (validHost.includes(req.hostname)) {
    next();
  } else {
    res.status(403).send({ status: 'ACCESS_DENIED' });
  }
};

const isAuth = (req, res, next) => {
  console.log('req.headers', req.headers);
  next();
};

module.exports = { isAuth, isValidHostname };
