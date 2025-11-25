function evaluation(obj){
    let employee = obj.filter(x=>x.tasksCompleted > 5);
    // console.log(employee);
    let performance = employee.map(x=>{
        if(x.rating > 4.5){
            return ({name:x.name, performance: "Excellent"});
        }
        else if(x.rating >= 3 && x.rating <= 4.5){
            return ({name:x.name, performance: "Good"});
        }
        else{
            return ({name:x.name, performance: "Needs Improvement"});
        }
    });
    const rank = {
        "Excellent": 3,
        "Good": 2,
        "Needs Improvement": 1
    };
    performance.sort((a, b)=>{
        return rank[b.performance]-rank[a.performance];
    });
    return performance;
}
let arr =  [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];
console.log(evaluation(arr));