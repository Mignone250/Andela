import validateArticle from './validate_article'
import validateComment from './validateComment'
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

    UpdateArticle (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('The given id was not found');
    
    
    const {error}=validateArticle(req.body);
    if(error) return res.status(400).send(error.details[0].message);
        article.title=req.body.title;
        article.content=req.body.content;
        res.json({'status': 200, 'message': 'Article updated succesfully','ArticleIdentification':article, });
    
    };

   DeleteArticle (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('given id was not found');
    
        const index=blog.articles.indexOf(article);
        blog.articles.splice(index, 1);
        res.json({'status':204,'ArticleIdentification':article,'message': 'Article  succesfully deleted', });
    };

     GetAllArticles (req,res){
        res.send(blog.articles);
    };

     GetOneArticle  (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('given id was not found');
        res.send(article);
    }; 
    
    CommentArticle (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).json({'status':404,'message':'given id was not found'});

        const {error}=validateComment(req.body);
    if(error) return res.status(400).json({'status':400,'message':error.details[0].message})
        article.comment=req.body.comment;
        res.json({'status': 200, 'message': 'Comment sent successful ','ArticleIdentification':article,});
    
    };

    }
    export default Articles = new Articles()
