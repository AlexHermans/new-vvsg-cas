$(document).ready(function() {

   var inputsCorrect = false;

  function correctEmail(str){
    if (str.includes('@')
        && str.includes('.',str.indexOf('@'))
        && str.substr(str.lastIndexOf('.')).length > 1){
      return true
    } else {
      return false
    }
  }

  window.addEventListener('change_form', function() {
    $('input').val('')
    $('.error').slideUp('fast', function(){$(this).detach()})
    $('.login-button').attr('disabled', true).addClass('disabled')
  })

  $('#email, #email_register').on('keyup', function(){
    if ($(this).val()){
      inputsCorrect = correctEmail($(this).val())
    }
  })

  $('#email, #email_register').focusout(function(){
    var error_el = $('p.error')
    console.log(inputsCorrect)
    console.log($('p.error').length)

    if (!inputsCorrect && !$('p.error').length && $(this).val()){
      console.log('error')
      var error = '<p class="error" style="display:none">Dit lijkt geen correct e-mail adres te zijn.</p>'
      $(this).before(error)
       $('p.error').slideDown()

    } else if (inputsCorrect && $(this).val()) {
      error_el.slideUp(400, function(){$(this).detach()})
    } else if (!$(this).val()){
      error_el.slideUp(400, function(){$(this).detach()})
    }
  })

  $('.login').on('keyup',function(){
    if ($('#password').val() && inputsCorrect && $('#email').val()){
      $('.login-button').attr('disabled', false).removeClass('disabled')
    } else {
        $('.login-button').attr('disabled', true).addClass('disabled')
    }
  })

  $('')

})
