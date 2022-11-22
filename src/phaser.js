import Phaser from 'phaser';

export default class PhaserVis {

    constructor() {
        this.phaser = new Phaser.Game({
            parent: 'phaser',
            scale: {
                mode: Phaser.Scale.RESIZE
            },
            render: {
                transparent: true
            },
            scene: [VisScene]
        });
    }

}

class VisScene extends Phaser.Scene {

    create() {
        this.scale.on('resize', this.resize, this);
        const textInput = document.getElementById('text-config').children[0];
        textInput.addEventListener('input', () => {
            try {
                this.addText(window.eval('('+textInput.value+')'));
                this.addTween(this.lastTweenConfig);
            } catch (e) {
                console.error(e);
                // TODO display error in Phaser I guess.
            }
        });
        const tweenInput = document.getElementById('tween-config').children[0];
        tweenInput.addEventListener('input', () => {
            try {
                this.addText(this.lastTextConfig);
                this.addTween(window.eval('('+tweenInput.value+')'));
            } catch (e) {
                console.error(e);
                // TODO display error in Phaser I guess.
            }
        });
    }

    addText(style) {
        if(this.tx) {
            this.tx.destroy();
        }
        this.lastTextConfig = style;
        this.tx = this.add.text(0, 0, '100', style).setOrigin(0.5);
        this.resize();
    }

    addTween(config) {
        if(!this.tx || !config) return;
        this.lastTweenConfig = config;
        this.tweens.add({
            targets: this.tx,
            ...config
        });
    }

    resize() {
        if(this.tx) this.tx.setPosition(this.scale.width / 2, this.scale.height / 2);
    }

}
