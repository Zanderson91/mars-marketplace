const sequelize = require('./config/connection');
const express = require('express');
const handlebars = require('express-handlebars')
const session = require('express-session');
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3006;

const hbs = handlebars.create({ helpers });
const sess = {
    secret: 'Super secret secret',
    cookie: {
        expires: 5 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
