// whatsapp cmt

function sendToWhatsApp() {
   
    var phoneNumber = '6381476847' ;
    var message = encodeURIComponent('Hi there! Welcome to the Nexus Digitalia family.'); 

    //  WhatsApp URL
    var url = 'https://wa.me/' + phoneNumber + '?text=' + message;
    window.open(url, '_blank');
}

// fb cmt

function sendToFacebook() {
    const url = 'https://www.facebook.com/nexusdigitaliafb'; 
    window.open(url, '_blank');
}

// insta cmt

function sendToInstagram() {
    const url = 'https://www.instagram.com/nexusdigitalia'; 
    window.open(url, '_blank');
}

// x cmt

function sendToTwitter() {
    const url = 'https://twitter.com/Nexusdigitalia'; 
    window.open(url, '_blank');
}

// linkedin cmt

function sendToLinkedIn() {
    const url = 'https://www.linkedin.com/in/nexus-digitalia-social-media-12a30b308/'; 
    window.open(url, '_blank');
}

// website cmt

function sendToWebsite() {
    const url = 'https://nexusdigitalia.com'; 
    window.open(url, '_blank');
}

// youtube cmt

function sendToYoutube(){
    const url = 'https://www.youtube.com/@nexusdigitalia';
    window.open(url, '_blank');    
}
//pinterest cmt
function sendToPinterest(){
    const url = 'https://in.pinterest.com/nexusdigitalia/';
    window.open(url, '_blank');    
}

function sendToEmail(){
    const url = 'mailto:business@nexusdigitalia.com';
    window.open(url, '_blank');    
}

