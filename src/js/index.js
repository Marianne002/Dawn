import { preloadImages, preloadFonts } from './utils';
import LocomotiveScroll from 'locomotive-scroll';
import { Panel } from './panel';
import Cursor from './cursor';

//ELEMENTS
const backtopEl = document.querySelector('.backtop');
const headerEl = document.querySelector('header');
const ep1El = document.querySelector('.start');
const startEl = document.querySelector('#serie__start');
const ep3El = document.querySelector('.end');
const endEl = document.querySelector('#serie__end');
const artistEl = document.querySelector('.artist');
const artistPrezEl = document.querySelector('#artistPrez');
const albumEl = document.querySelector('.album');
const albumPrezEl = document.querySelector('#albumPrez');
const newsEl = document.querySelector('.news');
const newsPrezEl = document.querySelector('#newsPrez');

const panels = [...document.querySelectorAll('.panel')];

//PRELOAD IMG AND FONTS
Promise.all([preloadImages('.tiles__line-img'), preloadFonts('rmd7deq')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // INITIALIZE THE LOCOMOTIVE SCROLL
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });

    //BACKTOP
    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
    ep1El.addEventListener('click', () => scroll.scrollTo(startEl));
    ep3El.addEventListener('click', () => scroll.scrollTo(endEl));
    artistEl.addEventListener('click', () => scroll.scrollTo(artistPrezEl));
    albumEl.addEventListener('click', () => scroll.scrollTo(albumPrezEl));
    newsEl.addEventListener('click', () => scroll.scrollTo(newsPrezEl));

    //NAVBAR SIDE COLLAPSE
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
    });

    //PANEL
    panels.forEach(panel => new Panel(panel));

    //INITIALIZE CUSTOM CURSOR
    const cursor = new Cursor(document.querySelector('.cursor'));

    // MOUSE EFFECTS
    [...document.querySelectorAll('a, .panel__item-imgwrap, button')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
});