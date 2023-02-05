$(function() {
    const options = document.querySelectorAll('.settingsOption input');
    let passwordInputValue = document.getElementById("psswrdInput");
    const char ={
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+?>."
    }

    $('#slider').on("input", function() {
        $('.sliderValue').text($(this).val());
        passwordLength = $(this).val();
        generatePassword();
    });
    
    $( "#buttonGenerate" ).click(function() {
        $("#copyInfoSpan").removeClass("copyInfoClass");
        setTimeout( function(){ 
        $("#copyInfoSpan").addClass("copyInfoClass");
        $("#copyInfoSpan").removeClass("visible");
        generatePassword();
        $("#copyInfoSpan").addClass("visible");
        $(".flip-card").addClass("rotate");
        $(".flip-card-inner").addClass("rotate");
        setTimeout( function(){ 
            $(".flip-card").removeClass("rotate");
            $(".flip-card-inner").removeClass("rotate");
          }  , 2000 );
        }, 100);

    });
   
    $(".containerInput").click(function(){
        if(passwordInputValue.value != null){
            $("#copyInfoSpan").addClass("backgroundGreen");
            copyToClipboard();
            setTimeout( function(){ 
            $("#copyInfoSpan").removeClass("visible");
            $("#copyInfoSpan").removeClass("backgroundGreen");
            }, 2000);
        }
    })

    function copyToClipboard(){
        passwordInputValue.select();
        passwordInputValue.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(passwordInputValue.value);
    }

    const generatePassword = () => {
        let charsForPassword = "";
        let generatedPassword = "";
        let passwordLength = $("#slider").val();
        options.forEach(option => {
            if(option.checked)
            {
                charsForPassword += char[option.id];
            }
        });
        for (let i = 0; i < passwordLength; i++){
            generatedPassword += charsForPassword[Math.floor(Math.random() * charsForPassword.length)];
        }
        $("#psswrdInput").val(generatedPassword);
    }
});


