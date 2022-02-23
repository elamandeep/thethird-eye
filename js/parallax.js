const main=document.querySelector('main')
const scrollout=document.querySelector('.scroll-out')
const section=document.querySelector('section')
const list=document.querySelectorAll('ul li')
const div=document.querySelectorAll('footer div')


div[0].classList.add('square')
main.addEventListener('scroll',(e)=>{
    let value=scrollout.getAttribute('data-out-rate')
    let scroll_width=main.scrollLeft
    let div_width=section.offsetWidth
    let pos = -(main.scrollLeft*value)/5
    scrollout.style.transform=`translate3d(${pos}px,0,0)`
    
    if (scroll_width<div_width){
      list[0].classList.add('active')      
      list[1].classList.remove('active')
      div[0].classList.add('square')
      div[1].classList.remove('square')
    }
    else if(scroll_width<(div_width*2)){
        list[0].classList.remove('active')
        list[1].classList.add('active')
        list[2].classList.remove('active')
        div[1].classList.add('square')  
        div[2].classList.remove('square')  
    }
    else if(scroll_width<(div_width*3)){
        list[1].classList.remove('active')
        list[2].classList.add('active')
        list[3].classList.remove('active')
        div[2].classList.add('square')  
        div[3].classList.remove('square')  
    }
    else if(scroll_width<(div_width*4)) {
        list[2].classList.remove('active')
        list[3].classList.add('active')
        list[4].classList.remove('active')
        div[3].classList.add('square')  
        div[4].classList.remove('square') 
    }
    else if(scroll_width<(div_width*5)){
        list[3].classList.remove('active')
        list[4].classList.add('active')
        div[4].classList.add('square')  
    }
    else{
        list[4].classList.remove('active')
        list[0].classList.add('active')
    }
})

// ======= portfolio=========
const target=document.querySelectorAll('.scroll')
const container=document.querySelector('.container')
container.addEventListener('scroll',()=>{
    target.forEach((element,index) => {
        let value=element.getAttribute('data-rate')
        let pos = -(container.scrollLeft*value)/20
        let rect=(element.getBoundingClientRect().left)
        target[index].style.transform=`translate3d(${pos}px,0,0)`
        let calc_screenwidth=(window.innerWidth) 
        if(rect<=calc_screenwidth){
            let src=element.getAttribute('data-src')
            element.setAttribute('src',src)
            element.classList.add('image-load')  
        }
    })    
    
})



