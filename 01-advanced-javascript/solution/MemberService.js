(function() {
  var LS_NAME = 'optis';
  var MemberService = {
    getMembers: function() {
      var memberObjects = JSON.parse(localStorage.getItem(LS_NAME) || '[]'),
          members = [];
      for (var idx = 0; idx < memberObjects.length; idx++) {
        var member = memberObjects[idx];
        members.push(new Member(member.firstName, member.lastName, member.jobDescription));
      }
      return members;
    },
    addMember: function(member) {
      var members = this.getMembers();
      members.push(member);
      localStorage.setItem(LS_NAME, JSON.stringify(members));
    }
  };
  
  window.MemberService = MemberService;
}());