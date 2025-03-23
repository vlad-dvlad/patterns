interface Input {
    paint()
}

interface RadioButton {
    paint()
}

class WinInput implements Input {
    paint() {
        console.log('Win input');
    }
}

class MacInput implements Input {
    paint() {
        console.log('Mac input')
    }
}

class WinRadioButton implements Input {
    paint() {
        console.log('Win radion button');
    }
}

class MacRadioButton implements Input {
    paint() {
        console.log('Mac radion button')
    }
}

interface GUIFactory {
    createInput(): Input
    createRadioButton(): RadioButton
}

class WinFactory implements GUIFactory {
    createInput(): Input {
        return new WinInput();
    }
    createRadioButton(): RadioButton {
        return new WinRadioButton();
    }
}

class MacFactory implements GUIFactory {
    createInput(): Input {
        return new MacInput()
    }
    createRadioButton(): RadioButton {
        return new MacRadioButton()
    }
}

class Application {
    _factory: GUIFactory;
    _input: Input;
    _radioButton: RadioButton;

    constructor(factory: GUIFactory) {
        this._factory = factory;
    }

    createUI() {
        this._input = this._factory.createInput()
        this._radioButton = this._factory.createRadioButton();
    }

}

const clientCodeAbstractFactory = (os: 'win' | 'mac') => {
    let factory: GUIFactory | undefined = undefined;
    if (os === 'win') {
        factory = new WinFactory();
    } else if (os === 'mac') {
        factory = new MacFactory();
    }
    if(factory) {
        const app = new Application(factory);

        return app
    }
}

const factoryAbstract = clientCodeAbstractFactory('mac');
factoryAbstract?.createUI()

factoryAbstract?._radioButton.paint()
factoryAbstract?._input.paint()




