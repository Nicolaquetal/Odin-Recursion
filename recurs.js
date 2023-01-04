function merge (tabinit,tab1,tab2){
    /*console.log("tabinit "+tabinit)
    console.log("tab1 "+tab1)
    console.log("tab2 "+tab2)*/
    let k = 0;
    while(tab1.length>0 && tab2.length>0){
        if(tab1[0]<tab2[0]){
            tabinit.splice(k,1,tab1[0]);
            k+=1
            tab1.shift()
            //console.log("etape k "+k+" tabinit afterif1  "+tabinit)
        }
        else{
            tabinit.splice(k,1,tab2[0]);
            k+=1
            tab2.shift()
            //console.log("etape k "+k+" tabinit afterelse1  "+tabinit)
        }
    }
    if(tab1.length==0){
        for(let i = 0; i<tab2.length;i++){
            tabinit.splice(k,1,tab2[i]);
            k+=1
            //console.log("etape k "+k+" tabinit afterif2 "+tabinit)
        }
    }
    else{
        for(let i = 0; i<tab1.length;i++){
            tabinit.splice(k,1,tab1[i]);
            k+=1
            //console.log("etape k "+k+" tabinit afterelse2 "+tabinit)
        }
    }   
}

function sortMerge(tab){
    let x = tab.length
    let mid = Math.ceil(x/2)
    if(x>1){
        let firstHalf = tab.slice(0,mid)
        let secondHalf = tab.slice(mid)
        sortMerge(firstHalf)
        sortMerge(secondHalf)
        merge(tab,firstHalf,secondHalf)
    }
}
function main(){
    tab = [5,2,1,4 ,72,8,11]
    console.log("avant "+tab)
    sortMerge(tab)
    console.log("apres "+tab)
}
main()