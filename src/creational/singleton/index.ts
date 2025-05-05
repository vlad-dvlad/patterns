class Singleton {
    static _instance: Singleton;

    /**
     * Приватний конструктор, не повинен створювати додаткових обєктів
     */
    private constructor() {}


    /**
     * get instance - єдине місце де ми отримуємо ЄДИНИЙ об'єкт  
     */ 
    public static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }

        return Singleton._instance;
    }
}


const clientCodeSingleton = () => {
    const s1 = Singleton.instance;
    const s2 = Singleton.instance;

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.')
    } else {
        console.log('Singleton failed, variables contain different instances.')
    }
}

clientCodeSingleton();