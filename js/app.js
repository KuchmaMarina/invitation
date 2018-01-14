var carousels = document.querySelectorAll('#typeInvitations .carousel');
var currentCarousel = 0;
var carouselInterval = setInterval(nextCarousel,5000);

function nextCarousel(){
    carousels[currentCarousel].className = 'carousel';
    currentCarousel = (currentCarousel+1)%carousels.length;
    carousels[currentCarousel].className = 'carousel demonstration';
}


$('#textToggle').click(function(){

    var hBlock = $('#textInf2');
    $(this).text(hBlock.is(':visible') ? 'Подробнее' : 'Скрыть');
    hBlock.slideToggle('slow');
    $('#textInf').append($('#textToggle'));
});

$('#mobMenu').click(function(){
    $('.mainMenu').slideToggle('slow');
});


 $('#arrowLeft').on('click', function(){
 var activeElem=$('#invExample').find('.active');
 if(activeElem.attr('class')==$('#invExample').children('img').first().attr('class')){
 $('#invExample').children('img').first().attr("class", "notActive");
 $('#invExample').children('img:eq(2)').attr("class", "active");
 }
 else{
 activeElem.prev().attr("class", "active");
 activeElem.attr("class", "notActive");
 }
 });

 $('#arrowRight').on('click', function(){
 var activeElem=$('#invExample').find('.active');

 if(activeElem.attr('class')== $('#invExample').children('img:eq(2)').attr('class')){
 $('#invExample').children('img:eq(2)').attr("class", "notActive");
 $('#invExample').children('img').first().attr("class", "active");
 }
 else{
 activeElem.next().attr("class", "active");
 activeElem.attr("class", "notActive");
 }
 });