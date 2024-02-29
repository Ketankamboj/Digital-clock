const clock = document.getElementById('clock')
const clock1 = document.getElementById('clock1')

    setInterval(function(){
        let date = new Date()
        clock.innerHTML = date.toLocaleTimeString()
    },1000)

    let dt = new Date()
    clock1.innerHTML = dt.toLocaleDateString()