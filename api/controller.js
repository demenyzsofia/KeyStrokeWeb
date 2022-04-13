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
    const restData = {"box": directories[0], "hist": directories[1], "line": directories[2], "roccurve": directories[3]}
    res.json(restData)
}

const easy = (req, res) => {
    const url = '/' + getLanguage(req) + '/easy/';
    let directories = fs.readdirSync(path.join(directoryPath, url));
   
    directories = directories.map((element, index)  =>{
        url_ = url + directories.at(index).toString()
        element = fs.readdirSync(path.join(directoryPath, url_ + '/'));
        element = element.map(item => {
                 return url_ + '/'  + item
        })
        return element
    } );
    const restData = {"box": directories[0], "hist": directories[1], "line": directories[2], "roccurve": directories[3]}
    res.json(restData)
}

const keystroke2014 = (req, res) => {
    const url = '/' + getLanguage(req) + '/keystroke2014/';
    let directories = fs.readdirSync(path.join(directoryPath, url));
   
    directories = directories.map((element, index)  =>{
        url_ = url + directories.at(index).toString()
        element = fs.readdirSync(path.join(directoryPath, url_ + '/'));
        element = element.map(item => {
                 return url_ + '/'  + item
        })
        return element
    } );
    const restData = {"box": directories[0], "hist": directories[1], "line": directories[2], "roccurve": directories[3]}
    res.json(restData)
}

const logicalstrong = (req, res) => {
    const url = '/' + getLanguage(req) + '/logicalstrong/';
    let directories = fs.readdirSync(path.join(directoryPath, url));
   
    directories = directories.map((element, index)  =>{
        url_ = url + directories.at(index).toString()
        element = fs.readdirSync(path.join(directoryPath, url_ + '/'));
        element = element.map(item => {
                 return url_ + '/'  + item
        })
        return element
    } );
    const restData = {"box": directories[0], "hist": directories[1], "line": directories[2], "roccurve": directories[3]}
    res.json(restData)
}

const strong = (req, res) => {
    const url = '/' + getLanguage(req) + '/strong/';
    let directories = fs.readdirSync(path.join(directoryPath, url));
   
    directories = directories.map((element, index)  =>{
        url_ = url + directories.at(index).toString()
        element = fs.readdirSync(path.join(directoryPath, url_ + '/'));
        element = element.map(item => {
                 return url_ + '/'  + item
        })
        return element
    } );
    const restData = {"box": directories[0], "hist": directories[1], "line": directories[2], "roccurve": directories[3]}
    res.json(restData)
}

const datasetsBox= (req, res) => {
    const url = '/' + getLanguage(req) + "/detectors/";
    let directories = fs.readdirSync(path.join(directoryPath, url));
   
    directories = directories.map((element, index)  =>{
        url_ = url + directories.at(index).toString()
        element = fs.readdirSync(path.join(directoryPath, url_ + '/'));
        element = element.map(item => {
                 return url_ + '/'  + item
        })
        return element
    } );
    const restData = {"abod": directories[0], "copod": directories[1], "fb": directories[2],
                        "hbos": directories[3], "iforest": directories[4], "knn": directories[5],
                        "lof": directories[6], "ocsvm": directories[7], "pca":directories[8]}
    res.json(restData)
}

module.exports = {sapipin, easy, keystroke2014, logicalstrong, strong, datasetsBox} 