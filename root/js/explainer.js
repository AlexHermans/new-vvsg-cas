$(document).ready(function() {
  var dict = {
    email: 'Geef hier je e-mail adres in. <br><a href="#" class="forgot inline">Vergeten?</a>',
    password: 'Geef hier je wachtwoord in. <br><a href="#" class="forgot inline">Vergeten?</a>',
    naam_register: 'Geef hier je voor- en achternaam in.',
    email_register: 'Dit e-mail adres is hoe we je registreren in onze databank.',
    password_register: 'Je wachtwoord moet 8 tekens lang zijn en minstens 1 hoofdletter en cijfer bevatten.',
    password_repeat_register: 'Geef je wachtwoord opnieuw in ter controle.'
  }


  $('input').on('focus', function (e) {
    var multiplier = $(this).prevAll('input').length

    if($('.explainer-container').css('display') == 'flex'){
      $('.explainer-container').removeClass('explainer-down').css('display', 'none')
    }

    if($('.explainer-container').css('display') == 'none'){
      $('.explainer-container').css({
        display: 'flex',
        marginTop: ((7.1*multiplier)+2.1)+'rem'
      }).addClass('explainer-down').children('p').html(dict[this.id])
    }
  })

  $('input').on('focusout', function(){
    $('.explainer-container').css('display', 'none')
  })
})
