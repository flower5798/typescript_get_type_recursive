import MoreChildModel from './MoreChildModel';

export default class ChildModel {

  name : string;
  email : string;
  moreChildModel : MoreChildModel;
  moreChildModelArray : Array<MoreChildModel>;
  variableItemsArray : Array<any>;
  
  constructor(name : string, email : string) {
    this.name = name;
    this.email = email;
    this.moreChildModel = new MoreChildModel('mc_obj');

    this.moreChildModelArray = [];
    for (let i = 0; i < 5; ++i) {
      this.moreChildModelArray.push(new MoreChildModel('mc_name_' + i));
    }

    this.variableItemsArray = [];
    this.variableItemsArray.push(11111);
    this.variableItemsArray.push("texttext111111");
    this.variableItemsArray.push(new MoreChildModel('mc_name_9999'));
  }

  func1(){
    
  }
}

