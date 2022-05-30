// Add the coffee to local storage with key "coffee"
const url=`https://masai-mock-api.herokuapp.com/coffee/menu`
fetch(url)
.then(function(res){
  return res.json()
})
.then(function(res){
  console.log('res',res.menu.data)
  product(res.menu.data)
  
})
.catch(function(err){
  console.log('err',err)
})
let arrItem=JSON.parse(localStorage.getItem('coffee')) ||[]


function product(data){
  data.forEach(function (ele){
    let menu=document.querySelector("#menu")

    let div=document.createElement('div')

    let title=document.createElement('h3')
    title.innerText=ele.title;

    let price=document.createElement('p')
    price.innerText=ele.price;

    let image=document.createElement('img')
    image.src=ele.image;

    let addBtn=document.createElement('button')
    addBtn.innerText="add_to_bucket"
    addBtn.addEventListener('click',function(){
      savetobucket(ele)
    })

    
    div.append(image,title,price,addBtn)
    menu.append(div)


  })
}
function savetobucket(ele){
arrItem.push(ele);
localStorage.setItem('coffee',JSON.stringify(arrItem))
let total_count=arrItem.length;
let count=document.querySelector('#coffee_count')
count.innerText=total_count
// console.log(count)

}