//**** This file is used by StaticFileCreator.js to get a definition/intructions on how to create corresponding static fallback file(s).
//***  (see also "genstatic" task in Gruntfile.js)
//NOTE: For full example, refer to refTop.js
module.exports = function() {

    return {
        multiLanguageEnabled: false,
        builderFunctionParam: {'cdnEnv': 'prod'},
    };
};