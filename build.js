
const fs = require("fs")
const path = require("path") 

fs.readdir("./blog",function(err,file){
   for(var i = 0 ;i <file.length ; i++){
        var p = path.join("./blog",file[i]);
        var md = fs.readFileSync(p).toString();    
        var template = fs.readFileSync("./template.html").toString();
        var result =  template.replace("%content%",md);
        fs.writeFileSync("./htmlBlog/"+file[i]+".html",result);
   }
})
