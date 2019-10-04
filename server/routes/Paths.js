import  express from 'express';
import Users from '../controllers/Users_api';



const router = express();

router.post('/api/V1/auth/userSignup/', Users.addUser);
router.post('/api/V1/auth/signin', Users.login);
export default router