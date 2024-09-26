
let S="abbsbaavshhsuon";
let m=S.split("");
let map={};
for (let string in m){
    if(!map[m[string]]){
        map[m[string]]=1
    }else{
        map[m[string]]+=1
    }
}
for( let i=0;i<m.length;i++){

    if(map[m[i]]==1){
        
        console.log(m[i]+" is unique element");
    }
}
// Time Complexity=O(n); Space complexity= O(n)
