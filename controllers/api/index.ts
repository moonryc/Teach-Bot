import express from 'express';
import userRoutes from './user-routes';
import questionRoutes from './question-routes';

const apiRoutes = express.Router();

apiRoutes.use('/users', userRoutes);
apiRoutes.use('/question', questionRoutes);

export default apiRoutes;
