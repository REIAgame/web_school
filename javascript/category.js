let ids=[];
let imgs=[];
let xmls=[];
let genelateBool=false;
let is_done=false;
let p=document.createElement("p");
let siteImg=document.createElement("img");
siteImg.setAttribute("class","siteImg");
siteImg.setAttribute("src","");
let divCnt=0;
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
    let usedDataLength=3;
    let a=document.createElement("a");
    let parent=document.getElementsByClassName("content-flex")[0];
    for(let id of ids){
        let img = siteImg.cloneNode();
        let tmpDiv=div.cloneNode();
        tmpDiv.id=divCnt;
        
        let tmpP=[];
        for(let i=0;i<usedDataLength;i++)    tmpP.push(p.cloneNode());
        let data=JSON.parse(localStorage.getItem(id.toString()));
        let tmpA=a.cloneNode();
        tmpA.appendChild(new Text(data.name))
        tmpA.setAttribute("href",data.URL);
        //画像
        tmpP[0].appendChild(tmpA);
        tmpP[1].appendChild(img);
        tmpP[2].appendChild(new this.Text(data.desc));
        xmls.push(new this.XMLHttpRequest());
        xmls[divCnt].open("GET","//capture.heartrails.com/api/is_done/huge/?"+data.URL,true);
        imgs.push(data.URL);
        xmls[divCnt].onloadend=getRes;
        xmls[divCnt].send();       
        tmpP.forEach((data)=>{tmpDiv.appendChild(data);});
        parent.appendChild(tmpDiv);
        divCnt++;
    }
    divCnt=0;
}
function getRes(){
    if(this.readyState==4 && this.status==200){
        let URL=this.responseURL.split("huge/?")[1];
        let parent=document.getElementById(imgs.indexOf(URL).toString()).children[1].children[0];
        if(JSON.parse(this.response).result){
            parent.src="http://capture.heartrails.com/huge?"+URL;
        }else{
            let getImg=new XMLHttpRequest();
            getImg.open("GET","//capture.heartrails.com/api/capture/huge/?"+URL);
            getImg.send();
            genelateCheck(URL);
            parent.src="http://capture.heartrails.com/huge?"+URL;
        }
    }
    is_done=false;
    genelateBool=false;
}
