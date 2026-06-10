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