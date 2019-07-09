const express =  require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Users = require("./models/users.model");

app.use(cors());
app.use(morgan("combined"));

require("./database")

app.use(require("./routes/users.route"));
app.use('/TCpanel',require("./routes/tcpanel.route"));
app.use('/Train',require("./routes/train.route"));
app.use('/TrainCategory',require("./routes/traincategory.route"));


app.set('port',5000)
app.set('port',app.get('port'));
app.listen(app.get('port'));