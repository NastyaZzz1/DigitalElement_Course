const nested = require('postcss-nested')
const nestedEnv = require('postcss-preset-env')
const nestedM = require('postcss-custom-media')

module.exports = {
    plugins:[
        nested(),
        nestedEnv(),
        nestedM ({}),
    ]
}