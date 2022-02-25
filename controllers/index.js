const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//ERROR HANDLER
router.use((req, res) => {
  console.log('==========================================');
  console.log('ERROR HANDLER');
  console.log('==========================================');
  res.status(404).end();
});

module.exports = router;
