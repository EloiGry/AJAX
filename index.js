
$(function() {

    var characters = []

    $.ajax({
        url :"https://thronesapi.com/api/v2/Characters",
        success: function(data) {
            
            characters = data
            displayList(characters)
           
        }
    })
    
    $("input").keyup(function() {
        var str = $("#input").val().toLowerCase()
        var filterArray = characters.filter(function(character){
            return character.fullName.toLowerCase().includes(str)
        })     
        displayList(filterArray)     
    })

    function displayList (array) {
        $('#characters').html("")
        array.forEach(function(character) {
            $('#characters').append(`
            <div class="character" id="cards">
            <img src="${character.imageUrl}">
            <h3 class="name" id="fullName"> ${character.fullName} </h3>
            <p class="title"> ${character.title}</p>
            </div>
            `)  
            
        })
    }

    $("#randomArray").click(function() {
        var shuffledCharacters = _.shuffle(characters)
        displayList(shuffledCharacters)
      })

    
})





