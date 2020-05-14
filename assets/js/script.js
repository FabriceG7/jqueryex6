$(document).ready(function(){
    $('#Fabrice').mouseover(function() {
        $('#Fabrice').width('80%'); //Ne pas mettre de quotes ni de valeur pour les pixels
    });
    $('#fabrice').mouseout(function() {
        $('#Fabrice').css('width','676px');
    });
});
