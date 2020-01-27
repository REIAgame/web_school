var category_a=document.createElement("a");
category_a.href="category.html";
var category_div=document.createElement("div");
category_div.setAttribute("class","category-item");
var category_item=category_div;
var categorys=[]
for(var id=1;id<localStorage.getItem("dataId");id++){
    for(var tag of JSON.parse(localStorage.getItem(id.toString())).tags){
        categorys.push(tag);
    }
}
categorys=categorys.filter(function(target,i,self){
    return self.indexOf(target)===i
});
categorys.sort();
window.onload=function(){
    var parent=document.getElementsByClassName("content-flex")[0];
    for(var category of this.categorys){
        var div=this.category_item.cloneNode();
        div.appendChild(this.category_a.cloneNode())
        div.children[0].innerText=category;
        
        parent.appendChild(div);
    }
    let target=document.getElementsByClassName("category-item");
    for(let i=0;i<target.length;i++){
        target[i].addEventListener("click",this.setTmp);
    }
    
}
function setTmp(){
    localStorage.setItem("tmp",this.innerText);
}
