import gamificationState from "../manager/buddyManager/LoggingStore";
import DatabaseManager from "../manager/DatabaseManager";



export default class analyticsManager{



    static initializeAnalytics(user,gamify){
        this.user = user;
        gamificationState.setUserId(user);

        this.gamify = gamify;
        gamificationState.setGamificationFlag(gamify);
    }
    s
    static addLog(componentName, interactionInfo = ""){
        var newlog = {}
        newlog.userId = gamificationState.userId;
        newlog.interactionInfo = interactionInfo;
        newlog.componentName = componentName;
        newlog.timestamp= Date.now();
        newlog.gamification = gamificationState.gamificationFlag;

        console.log("newlog: ", newlog);
        //newlog.name = Date.now();


        //createLogEvent(objData, onError, onSuccess) {..}

            DatabaseManager.getInstance().createLogEvent(newlog, /*tmpDateTime.getTime(),*/ () => {console.log("error from analytics")}, 
            () => console.log("success from analytics")
        );
    }
}