// On clicking remove button the item should be removed from DOM as well as localstorage.
let cartItem=JSON.parse(localStorage.getItem('coffee')) || []
console.log(cartItem)

// let total=cartItem.reduce(function(sum,{price}){

// })

cartItem.map(function (ele,index){
  var div=document.createElement('div');

  let image=document.createElement('img')
  image.src=ele.image;

  let title=document.createElement('h3')
  title.innerText=ele.title;

  let price=document.createElement('p')
  price.innerText=ele.price;

  let button=document.createElement('button')
  button.innerText='Remove';
  
  div.append(image,title,price,button)
  document.querySelector('#bucket').append(div)

  button.addEventListener('click',function(){
    remove(ele,index)
    location.reload()

  })
 

})
function remove(ele,index){
  cartItem.splice(index,1)
  localStorage.setItem('bucket',JSON.stringify(cartItem))
  
}