$(document).ready(function(){
    
    //progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1400,
        from: { color:'#aaa'},
        to: { color: '#64daf9'},
        
        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color);

            let value= Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1600,
        from: { color:'#aaa'},
        to: { color: '#64daf9'},
        
        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color);

            let value= Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2000,
        from: { color:'#aaa'},
        to: { color: '#64daf9'},
        
        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color);

            let value= Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2400,
        from: { color:'#aaa'},
        to: { color: '#64daf9'},
        
        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color);

            let value= Math.round(circle.value() * 5243);

            circle.setText(value);
        }
    });

    //iniciando o loader quando usuario chega
    let dataAreaOffSet = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffSet.top - 800) && stop == 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    //Paralax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc:'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc:'img/pattern.png'});

    },250);
    

    //filtro portfolio
    $('.filter-btn').on('click',function(){
        let type = $(this).attr('id');
        let boxes = $('.project-box');


        $(".main-btn").removeClass('active');
        $(this).addClass('active');

        //console.log(type.substring(0,3));
        eachBoxes(type.substring(0,3),boxes);
    });

    function eachBoxes(type,boxes){
        if(type=='all'){
            $(boxes).fadeIn();
        }else{
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');
                }else{
                    $(this).fadeIn();
                }
            });
        }
    }
    //Scroll para seções
    let navBtn = $('.nav-item');

    let bannerSection= $('#mainSlider');
    let aboutSection =$('#about-area');
    let serviceSection=$('#services-area');
    let teamSection=$('#team-area');
    let portfolioSection=$('#portfolio-area');
    let contactSection=$('#contact-area');
    
    let scrollTo = '0';
    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        if(btnId=='about-menu'){
            scrollTo=aboutSection;
        }else if (btnId=='services-menu'){
            scrollTo=serviceSection;
        }else if(btnId=='team-menu'){
            scrollTo=teamSection;
        }else if(btnId=='portifolio-menu'){
            scrollTo=portfolioSection;
        }else if(btnId=='contact-menu'){
            scrollTo=contactSection;
        }else{
            scrollTo=bannerSection;
        }
        console.log(scrollTo);

        $([document.documentElement,document.body]).animate({
            scrollTop: $(scrollTo).offset().top -70
        },1500);
    });

});