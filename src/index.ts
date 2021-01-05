import ChildModel from './ChildModel';

class Main {

  childModel : ChildModel;
  
  constructor(name : string) {
    this.childModel = new ChildModel(name, name + "@example.com");
  }

  func1(){
    let objKeyMap = this.getKeyMap(this.childModel);
    // console.log(objKeyMap);
    console.log(JSON.stringify(objKeyMap, null, '  '));
  }

  getKeyMap(obj : any){
    let returnObject : any = {};
    let inputObjData : any = {};

    // check type
    let objInstanceName = obj.constructor.name;
    let objType = typeof obj;
// console.log({
//   objType,
//   objInstanceName,
// });
    switch (objType) {
      case "string":
      case "number":
      case "boolean":
      case "undefined":
      case "function":
      case "bigint":
      case "symbol":
        returnObject = objType;
        return returnObject;
        break;
      default:
        // if object
        if (Array.isArray(obj)) {
          if (obj.length > 0) {
            let arrayChildrenInstanceName = obj[0].constructor.name;
            let arrayChildrenType = obj[0].constructor.name;
            let isAllChildrenSameType = true;
            for (let i = 0; i < obj.length; i++) {
              if ((obj[i].constructor.name !== arrayChildrenInstanceName)) {
                isAllChildrenSameType = false;
                break;
              }
            }
            if (isAllChildrenSameType) {
              switch (arrayChildrenType) {
                case "string":
                case "number":
                case "boolean":
                case "undefined":
                case "function":
                case "bigint":
                case "symbol":
                  returnObject = "Array<" + arrayChildrenType + ">";
                  break;
                default:
                  returnObject = "Array<" + arrayChildrenInstanceName + ">";
                  break;
              }
            } else {
              returnObject = "Array<any>";
            }
          } else {
            returnObject = "Array<any>";
          }
          return returnObject;
        } else {
          let keys = Object.keys(obj);
          keys.forEach(key => {
            inputObjData[key] = this.getKeyMap(obj[key])
          });
        }
        break;
    }

    returnObject[objInstanceName] = inputObjData;

// console.log(returnObject)
    return returnObject;
  }
}

let main = new Main('name111');
main.func1();

