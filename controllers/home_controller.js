module.exports.home = function(req,res){
 
    return res.render('home',{
        title:"Home"
    });


}

module.exports.dashboard = function(req,res){

   return res.render('dashboard',{
       title:"Dashboard"
   });

}
