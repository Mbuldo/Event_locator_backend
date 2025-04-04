const logger = require('./utils/logger');

const PORT = process.env.PORT || 5000;

const app = require('./app');
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const i18nMiddleware = require('./config/i18n');

const app = express();

app.use(i18nMiddleware);

const langSwitcher = require('./middleware/langSwitcher');
app.use(langSwitcher);
