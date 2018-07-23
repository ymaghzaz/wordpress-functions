const functions = require('firebase-functions');
const axios = require('axios');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const url = 'https://public-api.wordpress.com/rest/v1/sites/mosqueeguyancourt.wordpress.com/posts/'
 
exports.fetchPosts = functions.https.onRequest((request, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    axios.get(url).then(response =>{
       return  res.send(response.data);
    }).catch(err =>{
        console.log('err', err)
        return res.send('err',err);
    });
});
