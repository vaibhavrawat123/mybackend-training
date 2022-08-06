const printDate = function( ) {
    const A =new Date().getDate();
    return(A);
}

const printMonth = function ( ) {
    const B = new Date().getMonth()+1;
    return(B);

}

const getBatchInfo =function () {
    return("All info =>plutonium,week#3,day#5");
}

module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;

