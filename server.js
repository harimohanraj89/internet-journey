var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  var response = 'You made a GET request to the path "/". \n' +
                 'This is the response. \n' +
                 'You can consider a GET request to the root path "/" as the "home page" of a website. \n' +
                 'To continue on your journey, make a GET request to the path "/house"\n';
  res.send(response);
});

app.get('/house', function(req, res) {
  var response = 'You made a GET request to the path "/house". \n' +
                 '                           (   )\n' +
                 '                          (    )\n' +
                 '                           (    )\n' +
                 '                          (    )\n' +
                 '                            )  )\n' +
                 '                           (  (                  /\\\n' +
                 '                            (_)                 /  \\  /\\\n' +
                 '                    ________[_]________      /\\/    \\/  \\\n' +
                 '           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n' +
                 '          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n' +
                 '   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n' +
                 '  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n' +
                 ' /\\/\\/\\/       //_______\\       \\|__|      \\\n' +
                 '/      \\      /XXXXXXXXXX\\                  \\\n' +
                 '        \\    /_I_II  I__I_\\__________________\\\n' +
                 '               I_I|  I__I_____[]_|_[]_____I\n' +
                 '               I_II  I__I_____[]_|_[]_____I\n' +
                 '               I II__I  I     XXXXXXX     I\n' +
                 '            ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n\n\n' +
                 'This server\'s response to this request is this beautiful picture of a house.' +
                 'To continue on your journey, make a GET request to the path "/stateless".\n';
  res.send(response);
});

app.get('/stateless', function(req, res) {
  var response = 'You made a GET request to the path "/stateless".\n' +
                 'This server\'s response to such a request is some information on the stateless nature of HTTP.\n' +
                 'This server has no recollection whatsoever of any previous requests you, the user, have made.\n' +
                 'All it knows is that right now, you asked for GET "/stateless", and this is the answer to that question.\n' +
                 'Don\'t believe me? Go visit GET "/house" again, and see if the server remembers that you were there before.\n' +
                 'Once you have done that, feel free to continue on your journey by making a GET request to the path "/browser".\n' +
                 'Here is the catch. Do NOT use the curl command to make this request. Make this request using your WEB BROWSER.\n' +
                 'Simply enter the URL you wish to make a request to in the url bar of your browser and hit ENTER!\n';
  res.send(response);
});

app.get('/browser', function(req, res) {
  var response = 'You made a GET request to the path "/browser".\n' +
                 'This is the server\'s response to such a request.\n' +
                 'Congratulations! You have made a request to a server with your web browser!\n' +
                 'Every time you type "facebook.com" in your URL bar and hit enter, this is what happens!\n' +
                 'Web browsers make GET requests by default when you enter a URL in the URL bar.\n' +
                 'If no port number is specified, they make requests to port 80.\n' +
                 'Why 80? Because the elders of the internet said so. I swear!\n' +
                 'To continue on, make a GET request to the path "/html"';

  res.send(response);
});

app.get('/html', function(req, res) {
  var response = '<p>You made a <strong>GET request to the path "/html"</strong>.<p>\n' +
                 '<pThis is the server\'s response to such a request.<p>\n' +
                 '<hr>\n' +
                 '<h3>This is heading!</h3>\n' +
                 'This page looks a little prettier, does it not? How?<br>\n' +
                 'There is no magic to it all! It turns out that whenever a browser gets some text<br>\n' +
                 'as a response from a server, it tries to interpret this response as HTML by default.<br>\n' +
                 'Hence, it makes things look pretty if it encounters the right HTML tags!<br>\n' +
                 'Curl this same URL in your command line to see that it is just text.\n' +
                 '<hr>\n' +
                 'To continue on your journey, make a GET request to "/welcome/billy"\n';

  res.send(response);
});

app.get('/welcome/:name', function(req, res) {
  var response = '<p>You made a <strong>GET request to the path "/welcome/' + req.params.name + '"</strong>.<p>\n' +
                 '<pThis is the server\'s response to such a request.<p>\n' +
                 '<hr>\n' +
                 '<h1>Well, hello there ' + req.params.name + '</h1>\n' +
                 'Notice how this page is custom-built based on the URL that you entered?<br>\n' +
                 'You could enter ANY NAME after the "welcome" and you would get a page that says hello to that person.<br>\n' +
                 'The "old" mode of the internet would not be able to do this. The old mode would expect there to be a folder<br>\n' +
                 'on your server computer called "welcome", and inside that, a folder called ' + req.params.name + '.<br>\n' +
                 'If the server needed to be able to say hello to anybody, it would have to have an infinite number of <br>\n' +
                 'folders on its hard drive!<br><br>\n' +
                 'Servers of the "new" mode are smarter. They do not rely on some sort of internal file structure, they<br>\n' +
                 'run a computer program that is smart enough to detect a certain URL <strong>pattern</strong>, namely<br>\n' +
                 'GET "/welcome/SOME_NAME", and they are capable of generating and responding with a custom html page<br>\n' +
                 'based on the URL. Welcome to the future, holy crap this is awesome.<br>\n' +
                 '<hr>\n' +
                 'Before you continue on your journey, try more URLs of the same pattern, like "/welcome/sally", "/welcome/timmy", or maybe even<br>\n' +
                 'one with your own name!<br>\n' +
                 'To continue on your journey, make a GET request to "/links"\n';
  res.send(response);
});

app.get('/links', function(req, res) {
  var response = '<p>You made a <strong>GET request to the path "/links"</strong>.<p>\n' +
                 '<pThis is the server\'s response to such a request.<p>\n' +
                 '<hr>\n' +
                 '<h3>Are you tired of entering URLs manually into a URL bar to navigate through this application?</h3>\n' +
                 '<h1>So is the rest of the world!!</h1>\n' +
                 '<hr>\n' +
                 'This is what HTML links solve. That\'s right, those "a" tags.<br>\n' +
                 'They simply give your browser a convenient way of redirecting to a new URL when clicked on.<br>\n' +
                 'This page has been cleverly constructed to provide you a link to the right URL that will take you<br>\n' +
                 'to the next part of your journey. This link has been crafted by inserting the correct "href" attribute value<br>\n' +
                 'in the HTML.<br>\n' +
                 'Below is the link, clicking which will take you to the next <br>\n' +
                 'part of your journey. Clicking this link will make a GET request to the path "/finale".\n' +
                 '<hr>\n' +
                 '<a href="/finale">Click me to go to the final leg of your journey</a>';

  res.send(response);
});

app.get('/finale', function(req, res) {
  var response = '<p>You made a <strong>GET request to the path "/finale"</strong>.<p>\n' +
                 '<pThis is the server\'s response to such a request.<p>\n' +
                 '<hr>\n' +
                 '<h1>CONGRATULATIONS!</h1>\n' +
                 '<hr>\n' +
                 '<p>You have arrived at the end of the internet.</p>\n' +
                 '<p>JUST KIDDING. This is only the beginning...</p>\n' +
                 '<strong>~ ~ ~ ~ ~ FIN ~ ~ ~ ~ ~</strong>\n';

  res.send(response);
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
