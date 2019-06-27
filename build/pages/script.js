$(document).ready(function(){
    $('.pop').delay('2000').fadeOut('5000');

    $('.close').click(function(){
        $('#pop1').hide('slow');
        $('#pop2').hide('slow');
    });


    $('.txt').change(function(){
    $(':submit').removeAttr('disabled');
    });
    $(':submit').click(function(){

        $('.txt').attr('value','nilanjana');
        alert('feedback submitted successfuly');
        var txtName =  $('#txtName').val();
        var txt =  $('#txt').val();
        alert(' NAME :'+txtName+'       FEEDBACK :'+txt);
        $('#txtNamef').attr('value',txtName);
        $('#txtf').attr('value',txt);
        $('.pop-outer').fadeOut('slow');
        $('#pop1').fadeIn('slow');
        $('#pop1').delay('3000').fadeOut('slow');

    });


    $('.close').click(function(){
        $('.pop-outer').fadeOut('slow');
    });

    $('#reviews').click(function(){
        $('.pop-outer').hide();
        $('#pop1').fadeIn('slow');
        $('#pop1').fadeIn('fast').toggle();

    });


    $('#feedback').click(function(){
        $('#pop1').hide();
        $('#pop2').fadeIn('slow');
        $('.pop-outer').fadeIn('slow');
        $('.pop-outer').fadeIn('fast').toggle();

    });

});