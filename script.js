var menu=document.querySelector("#nav-ptr2 i");
var flag=0
menu.addEventListener("click",function(){
    if(flag==0){
        document.querySelector("#fullscr").style.top="0"
        document.querySelector("#nav ").style.color="#222"
        document.querySelector("#fullscr").style.color="#222"

        flag=1
    }
    else{
        document.querySelector("#fullscr").style.top="-100%"
        document.querySelector("#nav ").style.color="#dadada"
        document.querySelector("#fullscr").style.color="#dadada"

        flag=0
    }
    
})
var t1=gsap.timeline()
t1.from("#page1 h1",{
    y:40,
    opacity:0,
    duration:1
})
.from("#page1 h2",{
    y:50,
    opacity:0,
    duration:1,
    delay:"-0.8"
})
.from("#page1 h3",{
    y:80,
    opacity:0,
    duration:1,
    delay:"-1"
})
gsap.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 5%",
        scrub:3
    }
})
gsap.to("#page3 h2",{
    rotateX:0,
    opacity:1,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 80%",
        scrub:2
    }
})
gsap.to("#page3 #line",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page3 #line",
        scroller:"body",
        markers:false,
        start:"top 90%",
        scrub:5
    }
})

gsap.from("#page4 h1",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end:"top 90%",
        scrub:3
    }
})

var slide1h1=document.querySelectorAll("#page6 #slide1-of-h1 h1");
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(-100%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})
var slide1h1=document.querySelectorAll("#page6 #slide2-of-h1 h1");
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(0%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})
document.querySelector("#elem1").addEventListener("mousemove",function(dets){
    document.querySelector("#elem1 img").style.opacity=1
    document.querySelector("#elem1 img").style.left=`${dets.x}px`
    document.querySelector("#elem1 img").style.top`${dets.y-530}px`

})
document.querySelector("#elem1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem1 img").style.opacity=0
})
document.querySelector("#elem2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.opacity=1
    document.querySelector("#elem2 img").style.left=`${dets.x}px`
    document.querySelector("#elem2 img").style.top`${dets.y-530}px`

})
document.querySelector("#elem2").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 img").style.opacity=0
})


