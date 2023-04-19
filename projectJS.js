// form elements
let nameDet = document.querySelector('div.name.user-input-detail');
let emailDet = document.querySelector('div.email.user-input-detail');
let cityDet = document.querySelector('div.city.user-input-detail');
let stateDet = document.querySelector('div.state.user-input-detail');
let zipDet = document.querySelector('div.zip.user-input-detail');
let phoneDet = document.querySelector('div.phone.user-input-detail');
let siteDet = document.querySelector('div.website.user-input-detail');
let landingDet = document.querySelector('div.links.user-input-detail');

// buttons
let submitBtn = document.getElementById('submit');
let themeBtn = document.getElementById('theme-switch');

// current theme
let isLightTheme = true;


function submit() {
    // get values
    // basic info
    let basicInfo = {};
    let genSkills = {};
    let techSkills = {};
    let education = {'elt': document.getElementById('education-detail'), 'value': document.getElementById('education-detail').value};
    let empInfo = {};
    let busRefInfo = {'elt': document.getElementById('business-ref'), 'value': document.getElementById('business-ref').value};
    for (let id of ['name', 'email', 'city', 'state', 'zip', 'phone', 'website', 'links']) {
        let elt = document.getElementById(id);
        basicInfo[id] = {'elt': elt, 'value': elt.value};
    }

    // general skills
    for (let i = 1; i < 4; i++) {
        for (let id of [`gen-skill-name-${i}`, `gen-skill-detail-${i}`]) {
            let elt = document.getElementById(id);
            genSkills[id] = {'elt': elt, 'value': elt.value};
        }
    }

    // technical skills
    for (let i = 1; i < 3; i++) {
        for (let id of [`tech-skill-name-${i}`, `tech-skill-detail-${i}`]) {
            let elt = document.getElementById(id);
            techSkills[id] = {'elt': elt, 'value': elt.value};
        }
    }

    // employment info
    for (let i = 1; i < 4; i++) {
        for (let id of [`employ-start-${i}`, `employ-stop-${i}`, `employ-detail-${i}`]) {
            let elt = document.getElementById(id);
            empInfo[id] = {'elt': elt, 'value': elt.value};
        }
    }

    // check for problems
    let problems = false;
    for (let elt of [nameDet, emailDet, cityDet, stateDet, zipDet, phoneDet]) {
        elt.textContent = '';
    }
    // check email
    let email = basicInfo['email']['value'];

    let emailRegex = /^[a-zA-z0-9]+@[a-zA-z0-9.]+$/;
    if (!emailRegex.test(email)) {
        emailDet.textContent = 'Invalid email address.';
        emailDet.scrollIntoView({behavior: 'smooth', block: 'center'});
        problems = true;
    }

    // check if basic values are blank
    for (let id of ['links', 'website', 'phone', 'zip', 'state', 'city', 'email', 'name']) {
        let v = basicInfo[id];
        if (!v.value && id != 'website' && id != 'links') {
            document.querySelector(`div.${id}.user-input-detail`).textContent = 'Must not be blank.';
            document.querySelector(`div.${id}.user-input-detail`).scrollIntoView({behavior: 'smooth', block: 'center'});
            problems = true;
        }
    }

    // create page
    if (!problems) {
        let customFG = document.getElementById('fg-color').value
        let customBG = document.getElementById('bg-color').value
        let customALT = document.getElementById('alt-color').value

        let popup = window.open('', 'popUpWindow', 'height=500, width=500, left=100, top=100, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no');
        let newPageHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>';
        newPageHTML += `<style>* {font-family: sans-serif; color: ${customFG}; background-color: ${customBG};} h2 {border-bottom: 2px solid ${customALT};} div.gridlist {display: grid;grid-template-columns: 1fr 5fr;justify-content: center;justify-items: stretch;column-gap: 10px;row-gap: 10px;align-items: start;} div.gridlist-even {display: grid;grid-template-columns: 3fr 5fr;justify-content: center;justify-items: stretch;column-gap: 10px;row-gap: 10px;align-items: start;}</style>`;
        newPageHTML += '</head><body>';
        newPageHTML += `<h1>${basicInfo['name']['value']}</h1>`;
        newPageHTML += `<div>${basicInfo['phone']['value']}</div>`;
        newPageHTML += `<div>${basicInfo['email']['value']}</div>`;
        newPageHTML += `<div>${basicInfo['city']['value']}, ${basicInfo['state']['value']}, ${basicInfo['zip']['value']}</div>`;
        newPageHTML += `<div>${basicInfo['links']['value']}</div>`;
        newPageHTML += `<div>${basicInfo['website']['value']}</div>`;
        newPageHTML += '<h2>Skills</h2>'
        newPageHTML += '<div class="gridlist">'
        for (let i = 1; i < 4; i++) {
            let skillName = genSkills[`gen-skill-name-${i}`]['value'];
            let skillDetail = genSkills[`gen-skill-detail-${i}`]['value'];
            newPageHTML += `<div>${skillName}</div>`;
            newPageHTML += `<div>${skillDetail}</div>`;
        }
        newPageHTML += '</div>'
        newPageHTML += '<h2>Technical Experience</h2>'
        newPageHTML += '<div class="gridlist">'
        for (let i = 1; i < 3; i++) {
            let skillName = techSkills[`tech-skill-name-${i}`]['value'];
            let skillDetail = techSkills[`tech-skill-detail-${i}`]['value'];
            newPageHTML += `<div>${skillName}</div>`;
            newPageHTML += `<div>${skillDetail}</div>`;
        }
        newPageHTML += '</div>'
        newPageHTML += '<h2>Education</h2>'
        newPageHTML += `<div>${education['value']}</div>`;
        newPageHTML += '<h2>Employment History</h2>'
        newPageHTML += '<div class="gridlist-even">'
        for (let i = 1; i < 4; i++) {
            let empStart = empInfo[`employ-start-${i}`]['value'];
            let empStop = empInfo[`employ-stop-${i}`]['value'];
            let empDetail = empInfo[`employ-detail-${i}`]['value'];
            newPageHTML += `<div><nobr>${empStart}</nobr> - <nobr>${empStop}</nobr></div>`;
            newPageHTML += `<div>${empDetail}</div>`;
        }
        newPageHTML += '</div>'
        newPageHTML += '<h2>References</h2>'
        newPageHTML += `<div>${busRefInfo['value']}</div>`;
        newPageHTML += '</body></html>';
        popup.document.write(newPageHTML);
    }
}

function changeTheme() {
    isLightTheme = !isLightTheme;
    let root = document.querySelector(':root');

    if (isLightTheme) {
        root.style.setProperty('--fg', '#000');
        root.style.setProperty('--fg-alt', '#4d5254');
        root.style.setProperty('--fg-hover', '#576368');
        root.style.setProperty('--fg-active', '#738289');
        root.style.setProperty('--fg-err', '#ff8181');
        root.style.setProperty('--bg', '#fff');
        root.style.setProperty('--bg-alt', '#f3f9fc');
        root.style.setProperty('--bg-hover', '#eff8ff');
        root.style.setProperty('--bg-active', '#e6f3fd');
        root.style.setProperty('--bd', '#30acff');
        root.style.setProperty('--bd-alt', '#30acff');
        root.style.setProperty('--bd-hover', '#30acff');
        root.style.setProperty('--bd-active', '#30acff');
        root.style.setProperty('--shadow', '#a8bac1');
        themeBtn.textContent = '🌙';
    } else {
        root.style.setProperty('--fg', '#eee');
        root.style.setProperty('--fg-alt', '#ccc');
        root.style.setProperty('--fg-hover', '#ccc');
        root.style.setProperty('--fg-active', '#ccc');
        root.style.setProperty('--fg-err', '#ff8181');
        root.style.setProperty('--bg', '#262630');
        root.style.setProperty('--bg-alt', '#282832');
        root.style.setProperty('--bg-hover', '#303035');
        root.style.setProperty('--bg-active', '#303040');
        root.style.setProperty('--bd', '#30acff');
        root.style.setProperty('--bd-alt', '#30acff');
        root.style.setProperty('--bd-hover', '#30acff');
        root.style.setProperty('--bd-active', '#30acff');
        root.style.setProperty('--shadow', '#3d484c');
        themeBtn.textContent = '☀';
    }
}

submitBtn.addEventListener('click', submit);
themeBtn.addEventListener('click', changeTheme);