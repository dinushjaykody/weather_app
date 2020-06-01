const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=a4aa400691b0e898bdfff3fe54f012c8&query=' + address + '&units=f';

    request({url:url, json:true}, (error,response) => {
        if (error) {
            callback('Unable to connect to weather service..', undefined)
        } else if (response.body.error){
            console.log(response.body)
        // callback('Unable to find the location. Try again', undefined)
        }else {
            console.log('test345')
            console.log(response.body.location.lat)
            console.log(response.body.location.lon)
            console.log(response.body.location.name)

        callback(undefined,{
            latitude : response.body.location.lat,
            longitude: response.body.location.lon,
            location: response.body.location.name
        })
    }
})
}


module.exports = geocode