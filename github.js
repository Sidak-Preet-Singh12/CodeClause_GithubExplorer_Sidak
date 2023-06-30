var form = document.getElementById("myform");//reference of form


form.addEventListener('submit', function(e){   //action performed.callback function with object defined.
    e.preventDefault()//prevent auto submission.
    
    //searching string user enters.
    var search = document.getElementById("search").value

    var original = search.split(' ').join('')//to remove space.
    
    alert(original)
    //fetching call to api url.
    fetch("https://api.github.com/users/"+original)//returns promise.
    .then((result) => result.json())//configuring promise.
    .then((data) => {
        console.log(data)
        //targetting result.
        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${original}"> <img src=" ${data.avatar_url}"/></a>`
    
    
    })

})
