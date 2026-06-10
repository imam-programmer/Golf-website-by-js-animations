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