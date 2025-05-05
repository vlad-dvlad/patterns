var Singleton = /** @class */ (function () {
    /**
     * Приватний конструктор, не повинен створювати додаткових обєктів
     */
    function Singleton() {
    }
    Object.defineProperty(Singleton, "instance", {
        /**
         * get instance - єдине місце де ми отримуємо ЄДИНИЙ об'єкт
         */
        get: function () {
            if (!Singleton._instance) {
                Singleton._instance = new Singleton();
            }
            return Singleton._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Singleton;
}());
var clientCodeSingleton = function () {
    var s1 = Singleton.instance;
    var s2 = Singleton.instance;
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
};
clientCodeSingleton();
