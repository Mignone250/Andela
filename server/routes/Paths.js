import  express from 'express';
import Users from '../controllers/Users_api';
import Articles from '../controllers/Articles_api';



const router = express();

router.post('/api/V1/auth/userSignup/', Users.addUser);
router.post('/api/V1/auth/signin', Users.login);
router.post('/api/V1/articles', Articles.CreateArticle);
export default router
