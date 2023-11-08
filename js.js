const  hamburger=document.querySelector('hamburger');
const navlist=document.querySelector('nav ul');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
}
);
const typed = new typed ('multiple',{
     Strings:[  "Front end-developer","freelancer", "student"]
  ,  typeSpeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
});