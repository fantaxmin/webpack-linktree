import data from './data';

console.log("Hello via Bun!");

const $img : HTMLImageElement | null = document.querySelector('.profile-img');
const $bio : HTMLElement | null = document.querySelector('.bio');
const $links : HTMLElement | null = document.querySelector('.links');

const main = () => {
    $bio?.innerText = data?.description;
    // set image
    $img?.setAttribute('src', data?.imageProfile);
    // Cards links
    let links = data?.links?.map(( link ) => {
        return `<a href="${link.url}" class="link ${ link.id }">${ link.name }<span>${ link.emonji }</span></a>`;
    }).join('');
    if ($links) {
        $links.innerHTML = links;
    }
}
main();