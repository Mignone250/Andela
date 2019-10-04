import validateArticle from './validate_article'
import blog from '../models/db'

class Articles {
   
  CreateArticle (req,res){
        const {error}=validateArticle(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
        const article={
            id:blog.articles.length+1,
            title:req.body.title,
            content:req.body.content
        };
        blog.articles.push(article);
        res.json({'status': 200, 'message': 'Article created succesfully','ArticleIdentification':article,});
        
    };
    }
    export default Articles = new Articles()
    