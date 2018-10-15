//mudar cor de variavel
//document.documentElement.style.setProperty('--bg-nav', 'red');;
$(function(){
    $('#input-cor-menu').val($('.nav-menu-lateral').css('background'));
    $('#input-cor-caixas').val($('.container-dados').css('background'));
});