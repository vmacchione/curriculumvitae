window.addEventListener('load',function(){
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu = document.querySelector('.navBar__ul')
            menu.classList.toggle('show')
        })
    }
    
    const link = document.querySelectorAll('.navBar__link')
    for (let i = 0 ; i < link.length; i++){
        link[i].addEventListener('click', function(){
            console.log('Hola')
            this.menu.classList.add('show')
        })
    }
    
    
})
