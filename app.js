function getUserInfo() {
   var fnSuccess = function(data) {
    let email = data.email;
    let name = data.name;
    console.log(email);
    console.log(name);
    console.log(JSON.stringify(data));
    setUserInfo(email, name);
   }
   var fnError = function(e) {
     console.log(e);
     alert('error' + e);
     alert('error Details' + JSON.stringify(e));
   };
   DronaHQ.user.getProfile(fnSuccess, fnError);
}