var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require("bluebird");

var countryIds = [{
    name: 'spain',
    id: 23424950,
    coords: '40.4165000, -3.7025600'
}, {
    name: 'portugal',
    id: 23424925,
    coords: '38.736946, -9.142685'
}, {
    name: 'italy',
    id: 23424853,
    coords: '42.50, 12.50'
}, {
    name: 'france',
    id: 23424819,
    coords: '48.8534100, 2.3488000'
}, {
    name: 'uk',
    id: 23424975,
    coords: '54.00, 2.00'
}, {
    name: 'germany',
    id: 23424829,
    coords: '51.00, 9.00'
}, {
    name: 'greece',
    id: 23424833,
    coords: '39.00, 22.00'
}, {
    name: 'finland',
    id: 23424812,
    coords: '64.00, 26.00'
}, {
    name: 'austria',
    id: 23424750,
    coords: '47.20, 13.20'
}, {
    name: 'poland',
    id: 23424923,
    coords: '52.00, 20.00'
}, {
    name: 'ireland',
    id: 23424803,
    coords: '53.00, 8.00'
}, ]


/* GET trends listing. */
router.get('/api/trends/', function(req, res) {

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: 'oAIMDLvRezfxpdq0EoabU8iSy',
        consumer_secret: 'UHiFiMIZ2E8IVuj2MWZIe3Cb47qRMMVh7y5S6W6m4CT4kGihvY',
        access_token_key: '348109092-yTiaLIy4fjMIVDve3gmvnbciKqbORYgSLJUWHE2h',
        access_token_secret: 'gVStiFsAd8TcOh1xwIqKqo5jCyl0sNjXs8GKdz7WhPCIZ',
    });

    /**
     * Stream statuses filtered by keyword
     * number of tweets per second depends on topic popularity
     **/

    client.get('trends/place', {
        id: 23424950
    }, function(error, spanishTweets, spanishResponse) {
        if (error) {
            console.log(error)
            throw error;
        }
        console.log(spanishTweets); // The favorites. 

        client.get('trends/place', {
            id: 23424925
        }, function(error, portTweets, portResponse) {
            if (error) {
                console.log(portTweets)
                throw error;
            }
            //  console.log(tweets); // The favorites. 
            //console.log(response);  // Raw response object. 
            client.get('trends/place', {
                id: 23424925
            }, function(error, frenchTweets, frenchResponse) {
                if (error) {
                    console.log(frenchResponse)
                    throw error;
                }
                //  console.log(tweets); // The favorites. 
                //console.log(response);  // Raw response object. 
                res.send({
                    spanishTweets: spanishTweets,
                    portTweets: portTweets,
                    frenchTweets: frenchTweets,
                    countryIds: countryIds
                });
            });

        });

        //console.log(response);  // Raw response object. 

    });
});


module.exports = router;
