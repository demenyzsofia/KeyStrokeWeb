const path = require('path');
const fs = require('fs');
const { json } = require('express');

const directoryPath = path.join(__dirname, 'images');

const getLanguage = (req) =>{
    let language = req.header('language')
    if(language == undefined){
        language = 'hu'
    }
    return language
}

const sapipin = (req, res) => {
    // const url = '/' + getLanguage(req) + '/sapipin/hist_plots'
    // let list = fs.readdirSync(path.join(directoryPath, url));
    // // console.log(list)
    // list = list.map(item => {
    //     return url + '/' + item
    // })
    // // console.log(list)

    // res.json(list)
   

    const url = '/' + getLanguage(req) + '/sapipin/';
    let directories = fs.readdirSync(path.join(directoryPath, url));
   
    directories = directories.map((element, index)  =>{
        url_ = url + directories.at(index).toString()
        element = fs.readdirSync(path.join(directoryPath, url_ + '/'));
        element = element.map(item => {
                 return url_ + '/'  + item
        })
        return element
    } );
    const restData = {"hist": directories[0], "roccurve": directories[1]}
    res.json(restData)

}

module.exports = {sapipin} 