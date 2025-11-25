function freq(arr){
    let occurences = arr.reduce((acc, curr)=>{
        if(acc[curr] == undefined) acc[curr]  = 1;
        else acc[curr]  = acc[curr]+1;
        return acc;
    }, {})
    console.log(occurences)
}
let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
freq(arr);