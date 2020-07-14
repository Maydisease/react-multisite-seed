const Router = (name: string) => {
  return function (target: any) {
    // 新增目标类原型链上的urlAddress属性
    target.prototype.urlAddress = name;
    // 覆盖目标类原型链上的configName属性的值
    target.prototype.configName = "admin_conf";
    // 新增目标类原型链上的putData方法
    target.prototype.putData    = function () {
    };
    // 覆盖目标类原型链上的getData方法
    target.prototype.getData    = function () {
    }
  }
};

export {Router}
