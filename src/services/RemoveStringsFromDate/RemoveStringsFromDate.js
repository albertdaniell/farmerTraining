const RemoveStringsFromDate=(str)=>{
    
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var objectStr = str.toString();
    objectStr=objectStr.slice(4,15)
    let month1=objectStr.slice(0,3)
    month1= months.indexOf(month1) +1
    objectStr=objectStr.slice(4,objectStr.length)
    let fullDate= objectStr.slice(0,3) + "/" + month1 + "/" +objectStr.slice(3)

    return fullDate
    

}
// console.log(RemoveStringsFromDate("The Ring of Lords: The ring of Lords"));
export {RemoveStringsFromDate};