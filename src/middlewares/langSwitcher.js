// src/middleware/langSwitcher.js
module.exports = (req, res, next) => {
    const lang = req.query.lang || req.headers['accept-language'] || req.cookies.lang;
    if (lang && req.i18n.language !== lang) {
      req.i18n.changeLanguage(lang);
    }
    next();
  };
  