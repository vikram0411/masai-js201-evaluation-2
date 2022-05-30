// Add the coffee to local storage with key "coffee"
// var url=`https://masai-mock-api.herokuapp.com/coffee/men`

// console.log("hii")

// async function main(){
  
    
    
       
// }
// var arr=[]
var bag1=JSON.parse( localStorage.getItem("orders") ) || []
var bag=bag1.length || 0
var count=document.querySelector("#count");

var url="https://masai-mock-api.herokuapp.com/coffee/menu";

async function getdata(){
   
    try{
        var res=await fetch(url);
        var items=await res.json();
        append(items.menu.data)
        console.log(items.menu.data)

    }catch(err){
        console.log(err)
    }
}
getdata()


function append(item){
    item.forEach(function(data){
          var box=document.createElement("div")
          box.setAttribute("class","box")
          var pic=document.createElement("img")
          pic.src=data.image
          var name=document.createElement("h4")
          name.innerText=data.title;
          var price=document.createElement("p")
          price.innerText=data.price;
          var but=document.createElement("button")
          but.innerText="Add to Bucket"
          but.addEventListener("click",function(){
              func(data)
          })
          box.append(pic,name,price,but)
          document.querySelector("#container").append(box)
    })
}

function func(order){
    bag++
    var arr=JSON.parse( localStorage.getItem("orders") ) || [] // console.log(order)
    arr.push(
        {
            name:order.title,
            img:order.image,
            price:order.price
        }
    )
    // console.log(arr)
        
    localStorage.setItem("orders",JSON.stringify(arr))
    ans()
    // console.log(arr)
}

function ans(){
    count.innerText=`[ ${bag} ]`
}

// var bag=JSON.parse(localStorage.getItem("orders"))
// console.log(bag)
ans()


