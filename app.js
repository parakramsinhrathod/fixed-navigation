const backToTop  = document.querySelector('svg')


gsap.set('.nav-bg', { 
    backgroundColor: '#fff', 
    opacity: 0, 

})


gsap.set('svg', { 
    yPercent: -100
})

const tl = gsap.timeline({ 
    scrollTrigger: { 
        start:  'top+=200', 
        end: '+=1', 
        toggleActions: 'play none none reverse', 
        scrub: 2, 
    }
})


tl 
    .to('.nav-bg', { 
        opacity: 1
    })
    .to('svg', { 
        yPercent: 0
    })
    .to('.cta', { 
        x: -50, 
        backgroundColor: 'red'
    }, "<")


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// scroll to top 

backToTop.addEventListener('click', () => { 
    lenis.scrollTo('top', { 
        duration: 2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
})