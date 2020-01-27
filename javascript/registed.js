window.onload=function(){
    var start=new Date();
    var title=document.getElementById("SiteName");
    if(localStorage.getItem(this.localStorage.getItem("dataId"))!=null){
        title.innerHTML=JSON.parse(this.localStorage.getItem(this.localStorage.getItem("dataId")))["name"]+"を登録しました！";
        this.localStorage.setItem("dataId",parseInt(this.localStorage.getItem("dataId"))+1);
    }else{
        title.innerHTML=JSON.parse(this.localStorage.getItem(parseInt(this.localStorage.getItem("dataId"))-1))["name"]+"を登録しました！";
    }
    var b=this.setTimeout(function(){
        location.replace("index.html");
    },2000)
    
    
}
