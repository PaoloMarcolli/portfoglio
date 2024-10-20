
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var params = {
        to_name: "Paolo Marcolli",
        from_name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value,       
      };      
      const serviceID = "service_r1r7i8s";
      const templateID = "template_9lvmrru";
      alert(params.message);
      // these IDs from the previous steps
      emailjs.send(serviceID,templateID,  params)
          .then(() => {
              console.log('SUCCESS SEND MAIL!');
              alert("Your message sent successfully sended to my email address")
          }, (error) => {
              console.log('ERROR SEND MAIL!', error);
              alert("Your message not sent, contact administrator at email paolo.marcolli@hotmail.com")
          });
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
  });
}