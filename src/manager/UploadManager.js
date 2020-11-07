import gamificationState from "../../src/manager/buddyManager/LoggingStore"

export default class UploadManager {
  static UPLOAD_DATA_URL = 'https://jira.itcarlow.ie/desqol/upload_data';
  //static REGISTRY_USER_URL ='https://jira.itcarlow.ie/desqol-auth/registration';
  static LOGIN_USER_URL = 'https://jira.itcarlow.ie/desqol-auth/login ';
  
  /**
   * @returns {UploadManager}
   */
  static getInstance() {
    if (UploadManager.instance == null) {
      UploadManager.instance = new UploadManager();
    }
    
    return UploadManager.instance;
  }
  
  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setGamifiy(gamify){
    this.gamify = gamify;
  }

  getGamify(){
    return this.gamify;
  }

  setUser(user){
    this.user = user;
  }

  getUser(){
    return this.user;
  }
  
  uploadData(data, onSuccess) {
    console.log('Uploading data for', this.token);
    fetch(UploadManager.UPLOAD_DATA_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Token': this.token,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        console.log('Uploaded ' +
          data.symptoms.length + ' symptoms and ' +
          data.events.length + ' events.'
        );
        onSuccess();
      } else {
        console.warn('Upload failed!');
      }
    });
  }

  logInUser(data, onSuccess) {
   // console.log('Register new user ' + this.token);

   /***************Payload to register new User*********************************/
   // var registery = JSON.stringify({"email":data.email,"password":data.password,"displayName":data.displayName});

   /****************Payload to login new User********************************* */
   //console.log(">>>>>>>"+" "+data.email);
    var login = JSON.stringify({"email":data.email,"password":data.password});


    
    fetch(UploadManager.LOGIN_USER_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: login,
      redirect: 'follow'
    }).then((response) => {
      if (response.ok) {

        console.log('Log in successful'+' '+'Status: '+response.statusText);
       // console.log("GAMIFY"+response);

        //setToken after successful login
        this.setToken(response.getToken);
        return response;

      } else {
        console.warn('Log in failed!'+' '+'Status: '+response.statusText);
      }
    }).then((response)=>{
        return response.json();
    }).then((responseJson)=>{

        this.setToken(JSON.stringify(responseJson.token));
        gamificationState.setGamificationFlag(JSON.stringify(responseJson.gamify));
        gamificationState.setUserId(data.email);
        
        //onSuccess();
    });
  }
}
