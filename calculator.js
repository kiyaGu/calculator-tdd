module.exports.add = function(n){
  let delimeter = "";
  if(n.length < 2)
    return n == "" ? 0 : Number(n);
  else{ 
    if(n.charAt(0) == "/"){
      delimeter = n.charAt(2);
       n = n.substring(3)
    }
    let reg = new RegExp("\n|,|;");
    if(delimeter.length > 0)
    reg = new RegExp("\n|,|;|"+delimeter);
     n = n.split(reg);
     let arr = [];
     n.forEach((element)=>{
        arr.push(Number(element));
     });
     let nega = n.filter((element)=>{
       if(element < 0)
       return element;
     })
     if(nega.length > 0){
         return "negatives not allowed: " + nega.join(",");
     } else{
       return n.reduce((a,b)=>{
           return Number(a) + Number(b);
       })
     }  
    }
}