module.exports.info0 = function info(txt){
    console.log("My text is:", txt);
    return txt;
}

module.exports.err0 = function err(txt){
    console.log("ERROR :", txt);
    return txt;
}

//module.exports = {info, err};