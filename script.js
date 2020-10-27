const onBurgerClick = () =>{
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () =>{

        //nav toggle in and out
        navLinks.classList.toggle('nav-links-in');
        
        //animation of the links
        links.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation  = '';
            }
            else{
                console.log(index/5 + 1.5);
                link.style.animation = `linkFade 0.5s ease forwards ${index/ 5 +0.5}s`;
            }
           
        });
         // burger toggle
         burger.classList.toggle('toggle');
    });


   
    



}


// Execute functions //
onBurgerClick();