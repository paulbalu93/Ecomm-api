const {writeJSON,readJSON} = require('fs-extra')
const readDB = async (filepath) => {
return await readJSON(filepath);
}


module.exports = {

readDB
}