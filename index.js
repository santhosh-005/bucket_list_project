let $addBtn=document.getElementById("add-btn");
let $inputBox=document.getElementById("input-box");
let $bucketListDiv=document.getElementById("bucket-list");
let bucketList=[];
let wish;

function addToBucketList(){
    wish=$inputBox.value;
    bucketList.push(wish);
    showList(bucketList)
    //  console.log("hello")
 }
     
function showList(arr){
    $bucketListDiv.innerHTML="";
    for(let index=0;index<arr.length;index++){
    let div=document.createElement("div");
    let img=document.createElement("img");
    div.setAttribute("class","listItem");
    img.src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"
    img.addEventListener("click",function(){
        removeEventListener(index);
    })
    div.innerText=arr[index];
    div.appendChild(img);
    $bucketListDiv.append(div);
    console.log(arr)
    }
}
function removeEventListener(i){
    bucketList.splice(i,1);
    console.log(bucketList);
    showList(bucketList);
}
function resetBucketList(){
    bucketList=[];
    showList(bucketList);
}