const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'images');

const getLanguage = (req) =>{
    let language = req.header('language')
    if(language == undefined){
        language = 'hu'
    }
    return language
}

const sapipin = (req, res) => {
    const url = '/' + getLanguage(req) + '/sapipin/hist_plots'
    let list = fs.readdirSync(path.join(directoryPath, url));
    list = list.map(item => {
        return url + '/' + item
    })
    res.json(list)
}

module.exports = {sapipin} 