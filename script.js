const hamburger=document.querySelector('.fa-bars');
const responsive=document.querySelector('.responsive')
const heading=document.querySelector('.h3')


hamburger.addEventListener('click',()=>{
    responsive.style.display="block";
})

if( hamburger.style.display=="block"){

heading.innerText="hello";
}



