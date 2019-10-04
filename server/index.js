import express from 'express'
import router  from './routes/Paths'

const app = express();

app.use(express.json());
app.use('/',router);
const port = process.env.PORT || 1700;
app.listen(port,()=> {console.log(`Server listening on  ${port} port`)});

export default app;
