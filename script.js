let crsr=document.querySelector("#cursor")
let blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",(dets)=>{
crsr.style.left=dets.x+"px";
crsr.style.top=dets.y+"px"
blur.style.left=dets.x-200+"px";
blur.style.top=dets.y-200+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10px",
        end:"top 11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

let h4all=document.querySelectorAll("#nav h4");
h4all.forEach((elem)=>{
elem.addEventListener("mouseenter",(e)=>{
   
    crsr.style.scale=3;
    crsr.style.border="0.1px solid white";
    crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",(e)=>{
   
    crsr.style.scale=1;
    crsr.style.border="0px solid #95C11e";
    crsr.style.backgroundColor="#95C11e"
})
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from(".card",{
   scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:'body',
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:'body',
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})