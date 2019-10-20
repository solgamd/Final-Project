import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import routes from './routes/api';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

// app.get("/image/:id", function(req, res, next) {
//     var params = { Bucket: keys.tarotreaderapp, Key: req.params.id };
//     s3.getObject(params, function(err, data) {
//       if (err) {
//         return res.send({ error: err });
//       }
//       res.send(data.Body);
//     });
//   });


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
