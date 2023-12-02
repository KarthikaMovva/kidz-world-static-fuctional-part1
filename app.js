const book = [
    {
        item :"This was our pact",
        numberOf : 0,
        cost : 7.49
    },
    {
        item :"The famous five",
        numberOf : 0,
        cost : 4.50
    } ,{
        item :"Matlida",
        numberOf : 0,
        cost : 6.80
    } ,{
        item :"Harry Potter",
        numberOf : 0,
        cost : 10
    } ,{
        item :"For Young Readers",
        numberOf : 0,
        cost : 7.29
    }, {
        item :"Wimpy Kid-DIY",
        numberOf : 0,
        cost : 4.99
    } ,{
        item :"Dart Board",
        numberOf : 0,
        cost : 17.49
    } ,{
        item :"Connect 4",
        numberOf : 0,
        cost : 19.99
    }, {
        item :"Jenga",
        numberOf : 0,
        cost : 20.99
    } ,{
        item :"Monopoly",
        numberOf : 0,
        cost : 19.49
    } ,{
        item :"Bookmarks",
        numberOf : 0,
        cost : 12.49
    } ,{
        item :"Birthday card",
        numberOf : 0,
        cost : 19.99
    } ,{
        item :"Stuffed toys",
        numberOf : 0,
        cost : 15.99
    }, {
        item :"Dream catcher drawing",
        numberOf : 0,
        cost : 18.49
    }
]
var b = document.getElementById("cart");
var a = document.getElementById("cart-value");
var c = document.querySelectorAll(".space-evenly");
let value = 0;
var urlist=[]

    c.forEach((i,num)=>{
        i.onclick=()=>{
            value++
            a.innerHTML= value;
            if(book[num].numberOf==0){
                urlist.push(book[num])
            }
            book[num].numberOf++
        }
       
    })
var total=0
cart.onclick=()=>{
    urlist.map((v,i)=>{
        console.log(i+1+".","Name: "+v.item,"quantity: "+v.numberOf)
        total+=v.numberOf*v.cost
        })
    console.log("total bill: $"+Math.floor(total)+" round offer appliyed!")
}

    