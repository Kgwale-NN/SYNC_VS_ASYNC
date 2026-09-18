"use strict";
/* let name: string = "Nyakalo"
let greeting: string = `Hello ${name}`

console.log(greeting)

let num: number = 10
let numT: number = 5

let sum: number = num + numT

console.log(sum, "Sum")
console.log("All task are Synchronous") */
Object.defineProperty(exports, "__esModule", { value: true });
/* function fetchData(): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data fetched Successfully")
        }, 2000)

    })

     
}

async function getData(){

    console.log("fetching Data ...")
    const data = await fetchData()
    console.log(data)
    console.log("Data processing complete")

}

getData()
console.log("Program continues while data is being fetched") */
/* async function fetchUserData(userId: number):Promise<{id:number;name:string;email:string}>{

     await delay(4000)

    return{

        id:userId,
        name: `User ${userId}`,
        email: `User ${userId}@mlab.com`

    }
}

function delay(ms:number):Promise<void>{

    return new Promise(resolve => setTimeout(resolve, ms))
}

async function main():Promise<void>{

         try{

             console.log("Starting to fetch data....")
             const user = await fetchUserData(123)
             console.log("User data received:" , user)

             const[user1,user2,user3] = await Promise.all([

                fetchUserData(1),
                fetchUserData(2),
                fetchUserData(3)

             ])


            console.log("Multiple Users:" , {user1,user2,user3})



         }catch(error){

            console.log("Error detching user Data:" , error)


         }
}

main()
console.log("Doing another task") */
function fetchUserId(callback) {
    console.log("Fetching userId ...");
    setTimeout(() => {
        const userId = 'user123';
        callback(null, userId);
    }, 2000);
}
function fetchDetails(userId, callback) {
    console.log(`Fetching details for userId : ${userId}`);
    setTimeout(() => {
        const details = { name: "Snape", email: "Snape@hogworts.com" };
        callback(null, details);
    }, 3000);
}
function saveUserLog(userName, userEmail, callback) {
    console.log(`Saving log for ${userName} with ${userEmail}`);
    setTimeout(() => {
        const status = "log saved successfully";
        callback(null, status);
    }, 3000);
}
//# sourceMappingURL=index.js.map