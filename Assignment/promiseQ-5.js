
var getGoogleHomePage = new Promise(function (resolve, reject) {
    let url = "http://www.google.com";

    if (url) {
        resolve();
    } else {
        reject();
    }
});

getGoogleHomePage
    .then(function (res) {
        console.log({res:'http://www.google.com'});
    })
    .catch(function (err) {
        console.log({err: 'Some error has occurred'});
    });