
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

function openWorkSheetPeriod(evt, woorkSheetPeriodName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("page-curriculum-period");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-curriculum-period");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(woorkSheetPeriodName).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById(woorkSheetPeriodName).scrollTop = 0;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenWorkPeriod").click();

