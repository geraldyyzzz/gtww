const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gifImg = document.querySelector('#gif-img'); 

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love Youu syafaaaa cayankk>.<';
    
    gifImg.src = 'https://media.tenor.com/kkxWF2DrTRIAAAAj/cat-meme-elgatitolover.gif';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});