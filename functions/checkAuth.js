module.exports = function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect("/Silentlogin");
};
