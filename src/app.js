import 'dotenv/config';
import cors from 'cors';
import routes from './routes';
import models from './models';

var express = require("express");
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[3] // session to fetch authenticated users
    }
    next();
});
  
app.listen(process.env.PORT, (req, res) => {
 console.log(`Server running on http://localhost:${process.env.PORT}`);
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/students', routes.student);