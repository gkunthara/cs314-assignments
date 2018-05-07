function scrollToOne() {
    var elmnt = document.getElementById("one");
    elmnt.scrollIntoView();
}

function scrollToTwo() {
    var elmnt = document.getElementById("two");
    elmnt.scrollIntoView();
}

function scrollToThree() {
    var elmnt = document.getElementById("three");
    elmnt.scrollIntoView();
}

function validateForm() {
    var name = document.getElementById("firstname").value
    var email = document.getElementById("email").value
    var age = document.getElementById("age").value
    if (name == "" || email == "" || age == "") {
        alert("Missing a section!");
        return false;
    }
    else{
        // var h1 = document.createElement("h1")
        // var br = document.createElement("br");
        // var nameOutput = document.createTextNode(name)
        // var emailOutput = document.createTextNode(email)
        // var ageOutput = document.createTextNode(age)
        // h1.appendChild(nameOutput)
        // h1.appendChild(emailOutput)
        // h1.appendChild(ageOutput)
        // h1.appendChild(br)
        // document.body.appendChild(h1);


        $('#form-output').append($(`
        <div class="price-container space coin-style">
                    <h1 class="bold">Name</h1>
                    <h1 class="bold">Email</h1>
                    <h1 class="bold">Age</h1>
                    
        </div>
        <div class="price-container space">
            <h1 class="coin-style">${name}</h1>
            <h1 class="coin-style">${email}</h1>
            <h1 class="coin-style">${age}</h1>
        </div>
        `));
        $('#firstname').val('')  
        $('#email').val('')  
        $('#age').val('')  
        return false;
    }
}

function myMap() {
    var coinbase = {lat: 37.790047, lng: -122.400874};
    var waterloo = {lat: 43.470251, lng: -80.540807};
    var singapore = {lat: 1.3521, lng: 103.8198};
    var center = {lat: 19.8968, lng: 155.5828};
    var mapOptions = {
        center: center,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.roadmap
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    

    var marker = new google.maps.Marker({
        position: coinbase,
        map: map
    });

    var infowindow =  new google.maps.InfoWindow({
		content: 'Coinbase',
		map: map,
		position: marker
	});
    var marker2 = new google.maps.Marker({
        position: waterloo,
        map: map
    });
    var infowindow2 =  new google.maps.InfoWindow({
		content: 'University of Waterloo',
		map: map,
		position: marker2
	});
    var marker3 = new google.maps.Marker({
        position: singapore,
        map: map
    });
    var infowindow3 =  new google.maps.InfoWindow({
		content: 'Singapore',
		map: map,
		position: marker3
	});

    marker.addListener('mouseover', function() {
        infowindow.open(map, this);
    });
    marker2.addListener('mouseover', function() {
        infowindow2.open(map, this);
    });
    marker3.addListener('mouseover', function() {
        infowindow3.open(map, this);
    });
    
    

}