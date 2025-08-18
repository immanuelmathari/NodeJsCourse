const app = express();
const bodyParser = require('body-parser');

// const adminRoutes = require('./routes/25-admin.js');
const adminRoutes = require('./routes/25-admin');
const shopRoutes = require('./routes/25-shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes); // dont call it like a function
// the above also cant be below the below route. you know why

app.use(shopRoutes);

app.listen(3000);