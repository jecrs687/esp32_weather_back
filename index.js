import express from 'express';
import event from 'events';
import cors from 'cors';
const PORT = process.env.PORT || 3000 ;
const app = express();

var events = new event.EventEmitter();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    })
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    events.once('data', (data) => {
        console.log(data);
        res.send(data);
    })
    }
);
    
app.post('/', (req, res) => {
    events.emit('data', req.body)    
    res.send('Data received');
}
);
