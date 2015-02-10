$(document).ready(function() {
  var render = function() {
    var members = JSON.parse(localStorage.getItem('optis') || '[]');
    $(".ui.cards").empty();
    for (var idx = 0; idx < members.length; idx++) {
      var member = members[idx]; 
      $('<div class="ui card">' +
        '<div class="content">' +
          '<div class="header">' + member.firstName + ' ' + member.lastName + '</div>' +
          '<div class="meta">' + member.job + '</div>' +
        '</div>' +
      '</div>').click(function() {
        alert(member.firstName + ' ' + member.lastName);
      }).appendTo(".ui.cards");
    }
  };
  
  $("form").submit(function() {
    var members = JSON.parse(localStorage.getItem('optis') || '[]');
    members.push({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      job: this.job.value
    });
    localStorage.setItem('optis', JSON.stringify(members));
    this.firstName.value = "";
    this.lastName.value = "";
    this.job.value = "";
    render();
    return false;
  });
  
  render();
});