function fetchData() {
    fetch("https://jollofradio.com/api/stations")
    .then(
        res=> {
            res.json().then(
                data=>{
                    // console.log(data.data[0]);
                    
                const html= data.data
                    .map(user => {
                        return `
                            <div class="card">
                                <div class="imgBx">
                                       <img src="${user.logo}">
                                </div>

                                <div class="contentBx">
                                    <!--<a href="${user.link}" target="_blank" class="play"><i class="fas fa-play" fa-2x"></i></a>-->                                    


                                    <audio controls>
                                        <source src="${user.link}" type="audio/mpeg">
                                    </audio>
                                    <h3> ${user.name}</h3>
                                    <h2 class="price">${user.state}</h2>
                                    <a href="${user.twitter}" class="twitter" target="_blank"><i class="fab fa-twitter fa-1.5x"></i></a>

                                </div>
                            </div>
                        `
                    })
                    .join("");
                    // console.log(html);
                    console.log(data.data[0]);
                    document.getElementById("output2").innerHTML= html;
        })

        .catch(error => {
            console.log(error);
        });

})

}

fetchData();


function fetchPodData() {
    fetch("https://jollofradio.com/api/podcasts")
    .then(
        res=> {
            res.json().then(
                data=>{
                    // console.log(data.data[0]);
                    
                const html= data.data
                    .map(user => {
                        return `
                            <div class="card">
                                <div class="imgBx">
                                        <img src="${user.logo}" alt="image">
                                </div>

                                <div class="contentBx">
                                    <!--<a href="${user.link}" target="_blank" class="play"><i class="fas fa-play" fa-2x"></i></a>-->                                    


                                    <audio controls>
                                        <source src="${user.link}" type="audio/mpeg">
                                    </audio>
                                    <h3> ${user.name}</h3>
                                    <h2 class="price">${user.state|| ""}</h2>
                                    <a href="${user.twitter}" class="twitter" target="_blank"><i class="fab fa-twitter fa-1.5x"></i></a>

                                </div>
                            </div>
                        `
                    })
                    .join("");
                    // console.log(html);
                    console.log(data.data[0]);
                    document.getElementById("output3").innerHTML= html;
        })

        .catch(error => {
            console.log(error);
        });

})

}

fetchPodData();