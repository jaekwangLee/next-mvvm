import gsap, { Linear, Power2 } from 'gsap';
import { useEffect, useRef } from 'react';

export function useFlowerEffect() {
    useEffect(() => {
        falling();
    }, []);

    const falling = () => {
        gsap.set('#page-container', { perspective: 600 });
        gsap.set('img', { xPercent: '-50%', yPercent: '-50%' });

        const total = 20;
        const warp: any = document.getElementById('page-container'),
            w = window.innerWidth,
            h = window.innerHeight;

        for (let i = 0; i < total; i++) {
            const Div = document.createElement('div');
            gsap.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
            warp.appendChild(Div);
            animm(Div, w, h);
        }
    };

    const animm = (elm: gsap.TweenTarget, w: number, h: number) => {
        gsap.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
        gsap.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Power2.easeInOut });
        gsap.to(elm, R(2, 8), {
            rotationX: R(0, 360),
            rotationY: R(0, 360),
            repeat: -1,
            yoyo: true,
            ease: Power2.easeInOut,
            delay: -5
        });
    };

    const R = (min: number, max: number) => {
        return min + Math.random() * (max - min);
    };

    // a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
}
