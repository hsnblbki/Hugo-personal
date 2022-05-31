function slider(name){
    let slidePosition = 1;

    viewSlide(slidePosition);

    nextButton=document.querySelector("#"+ name +" .next");
    prevButton=document.querySelector("#"+ name +" .prev");

    function sliderMover(n){
        viewSlide(slidePosition += n);
    }
    
    nextButton.addEventListener("click",function () {
        sliderMover(1);
    })

    prevButton.addEventListener("click",function () {
        sliderMover(-1);
    })

    function viewSlide(n){
        let i;
        let slides=document.querySelectorAll("#"+ name +" .slides");
        if(n < 1){slidePosition = slides.length}
        if(n > slides.length){ slidePosition = 1}
        for(i=0 ; i < slides.length ; i++) {
            slides[i].style.display="none";
        }

        slides[slidePosition - 1].style.display="block";
    }
};

slider("work");

slider("reviews");