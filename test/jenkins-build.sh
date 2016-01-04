npm install
npm rebuild node-sass
gulp
karma start --single-run

#node server or #npm start
export NODE_ENV="production"
# export PORT=80 # need to be root to start on port 80

if pm2 info server > /dev/null; then
  pm2 restart server
else
  pm2 start server.js
fi
