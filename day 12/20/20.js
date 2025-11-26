
// Question 1
function createCounter(){
    let count = 0;
    return {
        increment : () =>{
            count++;
            console.log(`Current count: ${count}`)
        },
        decrement : () =>{
            count--;
            console.log(`Current count: ${count}`)
        }
    }
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 




//  Question 2
function createBankAccount(){
    let amt = 0;
    return {
        deposit : (amount) =>{
            amt += amount;
            console.log(`Deposited: ${amount}`)
        },
        withdraw :  (amount) =>{
            if(amt>=amount){
                amt -= amount;
                console.log(`Withdrawn: ${amount}`)
            }
            else 
                console.log("Insufficient balance")
        }
    }
}
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined

