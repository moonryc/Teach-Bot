import express from 'express';
import apiRoutes from './api';
import homeRoutes from './home-routes';

const router = express.Router();

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//ERROR HANDLER
router.use((req, res) => {
  console.log('==========================================');
  console.log('ERROR HANDLER');
  console.log('==========================================');
  res.status(404).end();
});

export default router;
