(function($) {
    $(document).ready(function() {
        $('.form-field input').focus(function() {
            $(this).prev('label').addClass('toTop');
        });
        $('.form-field input').blur(function() {
            if ($(this).val() == '') {
                $(this).prev('label').removeClass('toTop');
            }
        });
        $('.form-field.condition label').click(function() {
            $(this).prev('.checkbox').toggleClass('checked');
        });
        $('#visible').click(function(){
            $('.visible i').toggleClass('ion-eye-disabled');
        	if($(this).is(':checked')) {
            $('#password').get(0).type = 'text';
          } else {
              $('#password').get(0).type = 'password';
          }
        });
        // NOTE: Password field
        $('.form-field #password').focus(function(){
            $('.info-password').slideToggle();
        });
        $('.form-field #password').blur(function() {
            $('.info-password').slideToggle();
        });
    });
})(jQuery);
