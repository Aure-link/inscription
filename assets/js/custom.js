(function($) {
    $(document).ready(function(){
        $('.form-field').click(function(){
            $('.form-field label').removeClass('toTop');
            $(this).children('label').addClass('toTop');
        });
        $('.form-field input').focus(function(){
            $('.form-field label').removeClass('toTop');
            $(this).prev('label').addClass('toTop');
        });
    });
})(jQuery);
