let axios = require("axios");
const { query } = require("express");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

let getDistrictsSession = async function(req, res) {
    try {
        let district = req.query.districtId
        let date  = req.query.date
        let options ={
                 method:"get",
                 url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date} `
        }
        let result =  await axios(options)
        console.log(result.data)
            res.status(200).send({msg :result.data})
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

// 2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
// Create API's to do each of the following:
//                     - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
//                     - then change the above to get the temperature only( of London)
//                     - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
//                     result should look something like this
//                     [
//                     {city:"London", temp: 280},
//                     {city:"Moscow", temp: 290},
//                     {city:"Bangalore", temp: 301.2},
//                     .......
//                     ]

let getWhetherForCity = async function(req, res) {
    try {
        const cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        const cityObjArray=[];
        // better to use for...of here
        for(i=0; i<cities.length; i++){
           let Obj = {city : cities[i] } // city :"Bengaluru"

           let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f3462e7c6e75e0b418d3d2a3063d1fd6`)
           console.log(resp.data.main.temp)
           Obj.temp=resp.data.main.temp // {city:"Bangalore", temp: 301.2}
           cityObjArray.push(Obj)
            }
        //cityObjArray = [{city:"London", temp: 280},{city:"Moscow", temp: 290},{city:"Bangalore", temp: 301.2},.......]
        //myArray.sort((a,b) b.age - a.age);
        let sorted = cityObjArray.sort(function(a,b){return b.temp - a.temp})
        // can pass cityObjArray also here as sort method does sorting in the  same array.(in place)and original array is replaced by sorted one.
        // either ways both(sorted and  cityObjArray) are refering to the same array..assignment by reference is the default assignment in an array.        
         console.log(sorted)
         res.status(200).send({status:true, data: sorted})
         // can pass cityObjArray also here as sort method does sorting on the smae array(in place) and original array is replaced by the sorted one
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};




let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsSession = getDistrictsSession
module.exports.getWhetherForCity = getWhetherForCity


// 3. Axios POST request assignment

//             1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
//             2. Pick a memeId you want (Eg 129242436) for the POST request
//             3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
//             template_id <meme_id>
//             text0 <text you want as a caption>
//             text1 <optional>
//             username chewie12345
//             password meme@123

//             4. Return a response with a body like this
//             "data": {
//                     "url": "https://i.imgflip.com/5mvxax.jpg",
//                     "page_url": "https://imgflip.com/i/5mvxax"
//                 }

//-----3
let memeHandler =  async function(req, res){
    try{
        let templateid = req.query.template_id
      let text0 = req.query.text0
      let  text1 = req.query.text1
      let username =req.query.username
      let password =req.query.password
      console.log(username, password)
      //console.log(`body is : ${bla} `)
      var options = {
          method: "post",
          url: `https://api.imgflip.com/caption_image?template_id=${templateid}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
      }

      let result = await axios(options)
      //console.log(result.data)
      res.status(200).send({ msg: result.data })
  }
  catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
  }
}
module.exports.memeHandler = memeHandler   