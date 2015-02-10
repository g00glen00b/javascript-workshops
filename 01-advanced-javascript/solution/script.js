(function($, MemberService, Member) {
  $(document).ready(function() {
    var render = function() {
      var members = MemberService.getMembers();
      $(".ui.cards").empty();
      for (var idx = 0; idx < members.length; idx++) {
        (function(member) {
          $('<div class="ui card">' +
            '<div class="content">' +
              '<div class="header">' + member.getName() + '</div>' +
              '<div class="meta">' + member.getJob() + '</div>' +
            '</div>' +
          '</div>').click(function() {
            alert(member.getName());
          }).appendTo(".ui.cards");
        }(members[idx]));
      }
    };

    $("form").submit(function() {
      MemberService.addMember(new Member(this.firstName.value, this.lastName.value, this.job.value));
      this.firstName.value = "";
      this.lastName.value = "";
      this.job.value = "";
      render();
      return false;
    });

    render();
  });
}(jQuery, MemberService, Member));