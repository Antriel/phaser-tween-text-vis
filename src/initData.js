import toSource from "tosource";
import data from "./data";

export default function() {
    const tweenOptions = document.getElementById('tween-options');
    const tweenInput = document.getElementById('tween-config').children[0];
    for(const opt of data.tweenOptions) {
        const b = document.createElement('button');
        b.innerText = opt.name;
        b.onclick = () => {
            tweenInput.value = toSource(opt.config);
            tweenInput.dispatchEvent(new Event('input'));
        }
        tweenOptions.appendChild(b);
    }
    const textInput = document.getElementById('text-config').children[0];
    const textOptions = document.getElementById('text-options');
    for(const opt of data.textStyles) {
        const b = document.createElement('button');
        b.innerText = opt.name;
        b.onclick = () => {
            textInput.value = toSource(opt.style);
            textInput.dispatchEvent(new Event('input'));
        }
        textOptions.appendChild(b);
    }
}
