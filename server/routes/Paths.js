import  express from 'express';
import Users from '../controllers/Users_api';
import Articles from '../controllers/Articles_api';



const router = express();

router.post('/api/V1/auth/userSignup/', Users.addUser);
router.post('/api/V1/auth/signin', Users.login);
router.post('/api/V1/articles', Articles.CreateArticle);
router.get('/api/V1/articles/:id', Articles.GetOneArticle);
router.get('/api/V1/articles', Articles.GetAllArticles);
router.get('/api/V1/users', Users.getallUsers);
router.post('/api/V1/articles', Articles.CreateArticle);
router.put('/api/V1/articles/:id', Articles.UpdateArticle);
router.delete('/api/V1/articles/:id', Articles.DeleteArticle);
router.post('/api/V1/articles/:id', Articles.CommentArticle);
export default router
