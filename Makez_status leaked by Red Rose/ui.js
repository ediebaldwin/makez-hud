$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;
        $("#boxStamina").css("height",data.stamina + "%");
        if (event.data.action == "updateStatus") {
            updateStatus(event.data.st);
        }
    })
})


function updateStatus(status){
    $('#boxHunger').css('height', status[0].percent+'%')
    $('#boxThirst').css('height', status[1].percent+'%')
}

$(function() {
    var $heal = $("#boxHealth");
    var $armor = $("#boxArmor");
    var $voice = $("#boxVoice")
    window.addEventListener('message', function(event){
        $heal.css("height", (event.data.heal-100)+"%");
        $armor.css("height", (event.data.armor)+"%");
        $voice.css("height", event.data.voiceheal + "%");
        if (event.data.talking == true) 
        {
            $voice.css("background", "linear-gradient(to bottom, #6600cc 0%, #9933ff 100%)")
        }
        else if (event.data.talking == false)
        {
            $voice.css("background", "rgba(0, 0, 0, 0.4)")
        }
    }); 
});
