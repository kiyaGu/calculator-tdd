module.exports.add = function(n){
  if(n.length < 2)
    return n == "" ? 0 : Number(n);
  else{ 
      return n.split(/\n|,/).reduce((a,b)=>{
        return Number(a) + Number(b);
      })
    }
}