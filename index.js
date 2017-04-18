var youtubeStream = require('youtube-audio-stream');
var express = require('express');
var through = require('through2')
var app = express();

app.get('/startAudio', function(req,res){
	console.log('Request ingoing');
    var url2 = 'https://www.youtube.com/watch?v=1RHSh47GZvs';
    var url = 'https://www.youtube.com/watch?v=hb3LrjxnZyw&t=3032s';

    var stream1 = youtubeStream(url);
    stream1.pipe(res, {end: true});

    stream1.on('end', function(){

        var stream2 = youtubeStream(url2);
        stream2.pipe(res);

    });

});

app.get('/', function(req,res){

    res.sendFile(__dirname + '/index.html');
})

var getAudio = function (req, res) {
  var requestUrl = 'http://youtube.com/watch?v=' + req.params.videoId
  try {
    youtubeStream(requestUrl).pipe(res)
  } catch (exception) {
    res.status(500).send(exception)
  }
}

app.listen(5000);
