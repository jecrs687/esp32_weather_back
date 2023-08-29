import express from 'express';
import event from 'events';
import cors from 'cors';
const PORT = process.env.PORT || 3000 ;
const app = express();

var events = new event.EventEmitter();
const minute = 60;
const hour = 60 * minute;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    })
app.use(cors());
app.use(express.json());
var data = [];
app.get('/', (req, res) => {
    res.send(data);
    }
);

app.post('/', (req, res) => {
    Object.assign(req.body, {timestamp: Date.now()});
    data.push(req.body);
    if(data.length > hour*4){
        data.shift();
    }
    res.send("Data received");
}
);
