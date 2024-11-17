import React, { useEffect } from "react";

const Landing = () => {
    const COLOR_LIST = ['#7f00ff','#ff00ff','#0000ff','#007fff','#00ffff'];
    let $targetList;
    
    const init = () => {
    
        $targetList = document.querySelectorAll('[data-js="reveal"]');

        setup();

        window.addEventListener('scroll',onScroll,false);
        window.dispatchEvent(new Event('scroll'));

    }
    
    const getArrayRandomValue = (array) => array[Math.floor(Math.random() * array.length)];
    
    const setup = () => {
    
        for (const $target of $targetList) {

            const content = $target.innerHTML;
            const color   = 'revealColor' in $target.dataset ? $target.dataset.revealColor : getArrayRandomValue(COLOR_LIST);
            $target.innerHTML = `<span data-reveal="content"><div data-reveal="cover" style="background-color:${color}"></div><span data-reveal="text">${content}</span></span>`;

        }    
    }
    
    const onScroll = () => {
    
        const windowH      = window.innerHeight;
        const scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
        const isMostScroll = document.body.clientHeight <= scrollTop + windowH;

        for (const $target of $targetList) {

        if ($target.classList.contains('loaded')) continue;

        const rect = $target.getBoundingClientRect();
        const top  = rect.top + scrollTop;
        if (isMostScroll || top <= scrollTop + (windowH * .8)) $target.classList.add('loaded');

        }
    
    }
    
    useEffect( () => {
        init();
    });
    
    return (
        <div className="container mx-auto max-w-[1320px]">
            <main className="mainLainding">
                <ul className="inner">
                    <li>
                        <p data-js="reveal">ЗВЕЗДЫ&nbsp;&amp;&nbsp;ПЛАНЕТЫ</p>
                        <p data-js="reveal">ЛЮДИ</p>
                    </li>
                    <li>
                        <p data-js="reveal">РАССКРЫВАЕМ СУДЬБУ ВАШЕЙ КОМАНДЫ</p>
                    </li>
                    <li>
                        <p data-js="reveal">НАЙМ, ПРЕДНАЧЕРТАННЫЙ ЗВЁЗДАМИ И КАРТАМИ ТАРО!</p>
                    </li>
                    <li>
                        <p data-js="reveal">КАРТЫ&nbsp;&amp;&nbsp;СУДЬБЫ</p>
                    </li>
                    <li>
                        <p data-js="reveal">ЖЕЗЛЫ & КУБКИ</p>
                        <p data-js="reveal">ПЕНТАКЛИ & МЕЧИ</p>
                        <p data-js="reveal">МАГ & ИМПЕРАТРИЦА</p>
                        <p data-js="reveal">ПОВЕШЕННЫЙ & ЗВЕЗДА</p>
                    </li>
                    <li>
                        <p data-js="reveal">КОЛЕСНИЦА & СИЛА</p>
                        <p data-js="reveal">ОТШЕЛЬНИК & СПРАВЕДЛИВОСТЬ</p>
                        <p data-js="reveal">МИР & СУД</p>
                        <p data-js="reveal">ДЬЯВОЛ & БАШНЯ</p>
                    </li>
                    <li>
                        <p data-js="reveal">ИЕРОФАНТ & ВЛЮБЛЕННЫЕ</p>
                        <p data-js="reveal">СМЕРТЬ<br/>УМЕРЕННОСТЬ & ШУТ</p>
                        <p data-js="reveal">ИМПЕРАТОР<br/>ВЕРХОВНАЯ ЖРИЦА & ЛУНА</p>
                    </li>
                    <li>
                        <p data-js="reveal">ПАПА РИМСКИЙ<br/>КОЛЕСО ФОРТУНЫ & СОЛНЦЕ</p>
                        <p data-js="reveal">ТУЗ ЖЕЗЛОВ & ЧЕТВЕРКА КУБКОВ & СЕМЕРКА МЕЧЕЙ</p>
                    </li>
                    <li>
                        <p data-js="reveal">РЫЦАРЬ ПЕНТАКЛЕЙ & КОРОЛЬ МЕЧЕЙ</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Landing;