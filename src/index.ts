import data from './data';

console.log("Hello via Bun!");

const $img : HTMLImageElement | null = document.querySelector('.profile-img');
const $bio : HTMLElement | null = document.querySelector('.bio');
const $links : HTMLElement | null = document.querySelector('.links');
const $footer : HTMLElement | null = document.querySelector('footer');

const main = () => {
    // set image
    $img?.setAttribute('src', data?.imageProfile);
    // Cards links
    let links = data?.links?.map(( link ) => {
        return `<a href="${link.url}" class="link ${ link.id }">${ link.name }<span>${ link.emonji ?? '' }</span></a>`;
    }).join('');
    // footer content
    let $pFooter = document.createElement('p');
    $pFooter.innerText = data?.footer;

    // Inserts
    if($bio){
        $bio.innerText = data.description;
    }
    if ($links) {
        $links.innerHTML = links;
    }
    if ($footer) {
        $footer.appendChild($pFooter);
    }
}
main();