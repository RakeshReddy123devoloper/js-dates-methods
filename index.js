
//  Get Current Date and Time
let d1=new Date()
console.log(d1)


// Add Days to Date
const e=new Date("2024-8-28")
console.log(e)
e.setDate(e.getDate()+4)
console.log(e)


// Get Number of Days Between Dates
const date1=new Date("2024-08-28")
const date2=new Date("2024-09-01")
const res=Math.abs(date1-date2);
const res1=24*60*60*1000
console.log(res,res1)
console.log(Math.floor(res/res1))


// Format Date as MM/DD/YYYY
function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}
const d = new Date("2024-08-28");
console.log(formatDate(d));


