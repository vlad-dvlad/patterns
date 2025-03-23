var WinInput = /** @class */ (function () {
    function WinInput() {
    }
    WinInput.prototype.paint = function () {
        console.log('Win input');
    };
    return WinInput;
}());
var MacInput = /** @class */ (function () {
    function MacInput() {
    }
    MacInput.prototype.paint = function () {
        console.log('Mac input');
    };
    return MacInput;
}());
var WinRadioButton = /** @class */ (function () {
    function WinRadioButton() {
    }
    WinRadioButton.prototype.paint = function () {
        console.log('Win radion button');
    };
    return WinRadioButton;
}());
var MacRadioButton = /** @class */ (function () {
    function MacRadioButton() {
    }
    MacRadioButton.prototype.paint = function () {
        console.log('Mac radion button');
    };
    return MacRadioButton;
}());
var WinFactory = /** @class */ (function () {
    function WinFactory() {
    }
    WinFactory.prototype.createInput = function () {
        return new WinInput();
    };
    WinFactory.prototype.createRadioButton = function () {
        return new WinRadioButton();
    };
    return WinFactory;
}());
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createInput = function () {
        return new MacInput();
    };
    MacFactory.prototype.createRadioButton = function () {
        return new MacRadioButton();
    };
    return MacFactory;
}());
var Application = /** @class */ (function () {
    function Application(factory) {
        this._factory = factory;
    }
    Application.prototype.createUI = function () {
        this._input = this._factory.createInput();
        this._radioButton = this._factory.createRadioButton();
    };
    return Application;
}());
var clientCodeAbstractFactory = function (os) {
    var factory = undefined;
    if (os === 'win') {
        factory = new WinFactory();
    }
    else if (os === 'mac') {
        factory = new MacFactory();
    }
    if (factory) {
        var app = new Application(factory);
        return app;
    }
};
var factoryAbstract = clientCodeAbstractFactory('mac');
factoryAbstract === null || factoryAbstract === void 0 ? void 0 : factoryAbstract.createUI();
factoryAbstract === null || factoryAbstract === void 0 ? void 0 : factoryAbstract._radioButton.paint();
factoryAbstract === null || factoryAbstract === void 0 ? void 0 : factoryAbstract._input.paint();
