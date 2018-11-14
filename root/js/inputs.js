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

  function throwError(errorText){
      $('p.error').text(errorText).slideDown()
  }

  window.addEventListener('change_form', function() {
    $('input').not('input[type="submit"]').val('')
    $('.error').slideUp('fast', function(){$(this).text(' ')})
    $('.login-button').attr('disabled', true).addClass('disabled')
  })

  $('#MainContent_STSLogin_UserName, #email_register').on('keyup', function(){
    if ($(this).val()){
      inputsCorrect = correctEmail($(this).val())
    }
  })

  $('#MainContent_STSLogin_UserName, #email_register').focusout(function(){
    var error_el = $('p.error')
    console.log(inputsCorrect)
    console.log($('p.error').length)

    if (!inputsCorrect && !$('p.error').text() == ' ' && $(this).val()){
      console.log('error')
      throwError('Dit lijkt geen correct e-mail adres te zijn')

    } else if (inputsCorrect && $(this).val()) {
      error_el.slideUp(400, function(){$(this).text(' ')})
    } else if (!$(this).val()){
      error_el.slideUp(400, function(){$(this).text(' ')})
    }
  })

  $('.login').on('keyup',function(){
    if ($('#MainContent_STSLogin_Password').val() && inputsCorrect && $('#MainContent_STSLogin_UserName').val()){
      $('.login-button').attr('disabled', false).removeClass('disabled')
    } else {
        $('.login-button').attr('disabled', true).addClass('disabled')
    }
  })

  $('')

})
