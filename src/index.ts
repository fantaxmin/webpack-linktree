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
        return link.id !== "resume" 
               ? `<a href="${link.url}" class="link ${ link.id }" target="_blank">${ link.name }<span>${ link.emonji ?? '' }</span></a>`
               : `<button class="link ${ link.id }">${ link.name }<span>${ link.emonji ?? '' }</span></button>`;
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

const $buttonResume : HTMLElement | null = document.querySelector('.link.resume');
const $dialog : HTMLDialogElement | null = document.querySelector('dialog');

if ($buttonResume) {
    // Open dialog
    $buttonResume.addEventListener('click', () => {
        $dialog?.showModal();
    });
    // Close dialog
    const $closeDialog : HTMLElement | null = document.querySelector('.close-dialog');
    $closeDialog?.addEventListener('click', () =>{
        $dialog?.close();
    });

    // Resume download buttons
    const $resumeES : HTMLElement | null = document.querySelector('.resume-lang__es');
    const $resumeEN : HTMLElement | null = document.querySelector('.resume-lang__en');
    
    $resumeES?.addEventListener('click', () => downloadResume('ES'));
    $resumeEN?.addEventListener('click', () => downloadResume('EN'));
}

function downloadResume(lang : string) : void {
    const url = lang === 'ES'
               ? 'docs/CV_NicolasTorresL_ES.pdf'
               : 'docs/CV_NicolasTorresL_EN.pdf';
    
    // Abrir el PDF en una nueva pestaña
    const $link : HTMLAnchorElement = document.createElement('a'); // HTMLAnchorElement representan hipervinculos
    $link.href = url;
    $link.download = url.split('/').pop() ?? '';

    document.body.appendChild($link);
    $link.click();
    document.body.removeChild($link);
    
    $dialog?.close();
}

const $darkmodeButton : HTMLElement | null = document.querySelector('.darkmode__button');
const $darkmodeIcon : HTMLElement | null = document.querySelector('.darkmode__button-icon');

function changeTheme( theme : 'light' | 'dark' ) : void {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    if ($darkmodeIcon) {
        $darkmodeIcon.textContent = theme === 'light' ? '🌞' : '🌙';
    }
    localStorage.setItem('theme', theme);
}

const saveTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
changeTheme(saveTheme ?? 'light');

$darkmodeButton?.addEventListener('click', () => {
    
    $darkmodeButton?.classList.add('animate');
    setTimeout(()=> $darkmodeButton.classList.remove('animate'), 550);
    const theme = document.body.classList.contains('light') ? 'dark' : 'light';
    changeTheme(theme);
});


