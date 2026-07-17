let crsr=document.querySelector("#cursor")
let blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",(dets)=>{
crsr.style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) translate(-50%, -50%)`;
blur.style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) translate(-50%, -50%)`;
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
        scrub:2
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
        scrub:2
    }
})
gsap.from("#page4 h1",{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})