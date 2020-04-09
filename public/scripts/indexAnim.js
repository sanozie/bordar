anime({
    targets: '[data-floatingCard]',
    opacity: [0,1],
    duration: 500,
    delay: anime.stagger(500, {start: 300}),
    easing: 'easeInOutQuad',
});
anime({
    targets: '[data-floatingcard]:nth-of-type(1)',
    translateY: [50,60],
    easing: 'easeInOutQuad',
    delay: 50,
    loop: true,
    direction: 'alternate',
});
anime({
    targets: '[data-floatingcard]:nth-of-type(2)',
    translateY: [0,15],
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
});
anime({
    targets: '[data-floatingcard]:nth-of-type(3)',
    translateY: [60,65],
    easing: 'easeInOutQuad',
    delay: 25,
    loop: true,
    direction: 'alternate',
});