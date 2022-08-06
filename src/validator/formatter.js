const you =function () {
    const a='I am Vaibhav Kundra.';
    let p=a.trim();

  return p ;
}

  const hum=function () {
    const b="I am a B.Tech student of CSE branch.";
    let q= b.toLowerCase();
     return q;
    
}
 const oh=   function  () {
    const c= (" I am work in very Hard");
     let r=c.toUpperCase();
     return r;
}


module.exports.trim=you;
module.exports.toLowerCase= hum;
module.exports.toUpperCase=oh; 



