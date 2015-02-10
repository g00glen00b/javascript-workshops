(function() {
  var Member = function(firstName, lastName, jobDescription) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobDescription = jobDescription;
    
    this.getName = function() {
      return this.firstName + " " + this.lastName;
    };
    this.getJob = function() {
      return this.jobDescription;
    };
  };
  window.Member = Member;
}());