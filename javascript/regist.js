var tagCount=0;
var defleft=20;
var dataId=1;
var tagCnt=0;
var forms={};
window.onload=function(){
    if(this.localStorage.getItem("dataId")==null)
        this.localStorage.setItem("dataId",this.dataId);
    for(var i=0;i< this.document.getElementById("regist").children.length-1;i++){
        this.forms[document.getElementById("regist").children[i].id]=document.getElementById("regist").children[i];
        this.forms[document.getElementById("regist").children[i].id].addEventListener("focusin",this.placecler);
        this.forms[document.getElementById("regist").children[i].id].addEventListener("focusout",this.rePlace);
    }
    this.document.getElementById("submit").addEventListener("click",saveRow.bind(this));
}
function placecler(){
    if(this.children[0].className!="tag"){
        this.children[0].style.display="none";
        
    }
}
function rePlace(){
    if(this.innerText==""){
        console.log("表示");
        this.children[0].style.display="inline";
    }
}
function saveRow(){
    if(!this.forms["tags"].innerText.endsWith(","))
        this.forms["tags"].innerText+=",";
    var tmp={
        name:this.forms["Sitename"].innerText,
        tags:this.forms["tags"].innerText.split(","),
        URL:this.forms["URL"].innerText,
        desc:this.forms["desc"].innerText
    }
    tmp.tags.pop();
    var tags_exsits=tmp.tags.filter(function(target,i,self){
        return self.indexOf(target)===i;
    });
    tmp.tags=tags_exsits;
    for(var div in this.forms){
        this.forms[div].innerText="";
    }
    this.localStorage.setItem(this.localStorage.getItem("dataId"),JSON.stringify(tmp));
    

    location.replace("registed.html");
}