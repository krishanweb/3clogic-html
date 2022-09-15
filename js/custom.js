const uiElemnet ={
    sitenav :document.querySelectorAll('.primaryNav > li > a'),
    sitenavinner:document.querySelectorAll('.primaryNav > li > ul'),
    menuArrow:document.querySelector('.mobile-btn-sidebar'),
    sideNav:document.querySelector('.navSide'),
}
if(uiElemnet.sitenav !=null){
    uiElemnet.sitenav.forEach((item,index)=>{
       
       item.addEventListener('click',(e)=>{
        
        uiElemnet.sitenav.forEach((classitem) =>{
            e.target != classitem  ? classitem.classList.remove('active') :   e.target.parentElement.children[1] !=null? item.classList.toggle('active'):'';
         })
       
        uiElemnet.sitenavinner.forEach((item1)=>{
                if(e.target.parentElement.children[1] != item1){
                    item1.classList.remove('show');

                }
               
            }) 
            e.target.parentElement.children[1] !=null?e.target.parentElement.children[1].classList.toggle('show'):'';
        })
    })
   
}
if(uiElemnet.menuArrow !=null){
    uiElemnet.menuArrow.addEventListener('click',()=>{
        uiElemnet.sideNav.classList.toggle('colapseSideNav');
    });
}