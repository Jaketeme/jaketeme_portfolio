
        $(document).ready(function() {
            $(".filter-button").click(function() {
                var value = $(this).attr('data-filter');
                $('.filter-button').removeClass('active');
                $(this).addClass('active');
                if (value === "all") {
                    $('.filter').show('2000');
                } else {
                    $(".filter").not('.' + value).hide('4000');
                    $('.filter').filter('.' + value).show('4000');
                }
            });
        });

    
        $(".ancora").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop:  ($(hash).offset().top -200)
            }, 800, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          }; // End if
        });


        function enviarContato(caminho,dados,msgconfig){
      $.ajax({
        url:caminho,
        type:"POST",
        data:dados,
        dataType:'json',
        beforeSend: function(){
          msgconfig.status.addClass('hidden');
        },
        success: function(retorno){
          if(retorno.status){
            msgconfig.enviado.removeClass("hidden");
          }else{
            msgconfig.status.addClass('hidden');
            msgconfig.problema.removeClass('hidden');
          }
        },
        error: function(){
          msgconfig.problema.removeClass('hidden');
        }
      })
    }

    function validar_campo($campo){
      if($campo.val() == ""){
        $campo.addClass("form-error");
        $campo.parent().find(".help-block").addClass("valid-error");
        return false;
      }
      $campo.removeClass("form-error");
      $campo.parent().find(".help-block").removeClass("valid-error");
      return true;
    }

    $('#form-contato').submit(function(evento){
      evento.preventDefault();

      var situacao_do_form = true;

      var nome = $('#nome');
      var email = $('#email');
      var assunto = $('#assunto');
      var telefone = $('#telefone');
      var mensagem = $('#mensagem');
      

      situacao_do_form = validar_campo(nome);
      situacao_do_form = validar_campo(email);
      situacao_do_form = validar_campo(assunto);
      situacao_do_form = validar_campo(telefone);
      situacao_do_form = validar_campo(mensagem);
      

      var msconfig = {
        status: $('.form-status'),
        enviado: $('.form-enviado'),
        problema: $('.form-problema')
      }


      if(situacao_do_form){
        enviarContato('mail.php',$(this).serialize(),msconfig);
      }

    });


   