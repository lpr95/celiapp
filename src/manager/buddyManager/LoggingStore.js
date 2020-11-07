import { observable, action } from "mobx";
import { create, persist } from "mobx-persist";
import { AsyncStorage, Platform } from "react-native";

const hydrate = create({
  storage: AsyncStorage,
});

class LoggingStore { 


@observable gamificationFlag= null;
@observable userId=null;

  @action
setGamificationFlag = (flag) => {
  this.gamificationFlag = flag;
};

@action
setUserId = (userId) => {
  this.userId = userId;
}

  @action
  changeGamificationFlag = () => {
    this.gamificationFlag = !this.gamificationFlag;
  };
}

export default new LoggingStore();
