let ids=[];
let p=document.createElement("p");
let div=document.createElement("div");
div.setAttribute("class","SiteInfo");
let target=localStorage.getItem("tmp");
document.title="SiteStack - "+target;

for(let Lid=1;Lid<localStorage.getItem("dataId");Lid++){
    for(element of JSON.parse(localStorage.getItem(Lid.toString()))["tags"]) {
        if(element==target){
            ids.push(Lid);
            break;
        }
    }
}
window.onload=function(){
    let usedDataLength=2;
    let a=document.createElement("a");
    let parent=document.getElementsByClassName("content-flex")[0];
    for(let id of ids){
        let tmpDiv=div.cloneNode();
        let tmpP=[];
        for(let i=0;i<usedDataLength;i++)    tmpP.push(p.cloneNode());
        let data=JSON.parse(localStorage.getItem(id.toString()));
        let tmpA=a.cloneNode();
        tmpA.appendChild(new Text(data.name))
        tmpA.setAttribute("href",data.URL);
        //画像
        tmpP[0].appendChild(tmpA);
        tmpP[1].appendChild(new this.Text(data.desc));
        tmpP.forEach((data)=>{tmpDiv.appendChild(data);});
        parent.appendChild(tmpDiv);
        
    }
}