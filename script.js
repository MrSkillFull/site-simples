        //Animação to título do header
        title = document.querySelector('.title');
        let isVisible = true;
        setInterval(() => {
            isVisible = !isVisible;
            title.style.opacity = isVisible ? '1' : '0';
        }, 750);

        //Animação da sidebar
        sidebar = document.querySelector(".sidebar");
        menu = document.querySelector('.menu-ico');
        menu.addEventListener('click', ()=>{
            if(sidebar.classList.contains('openSidebar')){
                sidebar.classList.remove('openSidebar');
            }else{
                sidebar.classList.add('openSidebar');
            }
        })
