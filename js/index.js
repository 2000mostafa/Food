$("#didebar i").click(function(){
    let sitbar= $("#didebar").innerWidth();
if($("#didebar").css('left') =="0px")
{
    $("#didebar").animate({left: - sitbar} ,500);
}
else{
    $("#didebar").animate({left:'0px'} ,500)
}
   
})
