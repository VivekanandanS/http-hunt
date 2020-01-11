var rp = require('request-promise');
var config = require('./config');

exports.challenge = exports.input = async () => {
    const uri = config['host'] + config['challenge'];
    var options = {
        headers: {
            userId: config['user']
        },
        json: true
    }
    try {
        var response = await rp.get(uri, options);    
    } catch (error) {
        console.log('Error while requesting input')
        throw error;
    }
    console.log(response)
    return +response['stage'].toString().split('/')[0];
}



exports.input = async () => {
    const uri = config['host'] + config['input'];
    var options = {
        headers: {
            userId: config['user']
        },
        json: true
    }
    try {
        var response = await rp.get(uri, options);    
    } catch (error) {
        console.log('Error while requesting input')
        throw error;
    }
    return response;
}



exports.output = async (payload) => {
    const uri = config['host'] + config['output'];
    var options = {
        headers: {
            userId: config['user']
        },
        body : payload,
        json: true
    }
    try {
        var response = await rp.post(uri, options);    
    } catch (error) {
        console.log('Error while requesting input')
        throw error;
    }
    return response;
}


