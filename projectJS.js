// form elements
// basic info
let nameInpt = document.getElementById('name');
let emailInpt = document.getElementById('email');
let cityInpt = document.getElementById('city');
let stateInpt = document.getElementById('state');
let zipInpt = document.getElementById('zip');
let phoneInpt = document.getElementById('phone');
let siteInpt = document.getElementById('website');
let landingInpt = document.getElementById('links');

let nameDet = document.querySelector('div.name.user-input-detail');
let emailDet = document.querySelector('div.email.user-input-detail');
let cityDet = document.querySelector('div.city.user-input-detail');
let stateDet = document.querySelector('div.state.user-input-detail');
let zipDet = document.querySelector('div.zip.user-input-detail');
let phoneDet = document.querySelector('div.phone.user-input-detail');
let siteDet = document.querySelector('div.website.user-input-detail');
let landingDet = document.querySelector('div.links.user-input-detail');

// general skills
let skillName1Inpt = document.getElementById('gen-skill-name-1');
let skillDet1Inpt = document.getElementById('gen-skill-detail-1');
let skillName2Inpt = document.getElementById('gen-skill-name-2');
let skillDet2Inpt = document.getElementById('gen-skill-detail-2');
let skillName3Inpt = document.getElementById('gen-skill-name-3');
let skillDet3Inpt = document.getElementById('gen-skill-detail-3');

// technical skills
let techName1Inpt = document.getElementById('tech-skill-name-1');
let techDet1Inpt = document.getElementById('tech-skill-detail-1');
let techName2Inpt = document.getElementById('tech-skill-name-2');
let techDet2Inpt = document.getElementById('tech-skill-detail-2');

// education
let eduInpt = document.getElementById('education-detail');

// previous employment
let empStrt1Inpt = document.getElementById('employ-start-1');
let empStop1Inpt = document.getElementById('employ-stop-1');
let empDet1Inpt = document.getElementById('employ-detail-1');
let empStrt2Inpt = document.getElementById('employ-start-2');
let empStop2Inpt = document.getElementById('employ-stop-2');
let empDet2Inpt = document.getElementById('employ-detail-2');
let empStrt3Inpt = document.getElementById('employ-start-3');
let empStop3Inpt = document.getElementById('employ-stop-3');
let empDet3Inpt = document.getElementById('employ-detail-3');

// business references
let busRefInpt = document.getElementById('business-ref');

// submit
let submitBtn = document.getElementById('submit');


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

    // check values
    let problems = false;
    // check if basic values are blank
    for (k in basicInfo) {
        let v = basicInfo[k];
        if (!v.value && k != 'website' && k != 'links') {
            document.querySelector(`div.${k}.user-input-detail`).textContent = 'Must not be blank.';
            document.querySelector(`div.${k}.user-input-detail`).scrollIntoView();
            problems = true;
        }
    }
    // check email
    let email = basicInfo['email']['value'];

    let emailRegex = /^[a-zA-z0-9]+@[a-zA-z0-9.]+$/;
    if (!emailRegex.test(email)) {
        emailDet.textContent = 'Invalid email address.';
        emailDet.scrollIntoView();
        problems = true;
    }

    // create page
    if (!problems) {
        let popup = window.open('', 'popUpWindow', 'height=500, width=500, left=100, top=100, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no');
        let newPageHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>';
        newPageHTML += '<style>* {font-family: sans-serif;} h2 {border-bottom: 2px solid #30acff;} div.gridlist {display: grid;grid-template-columns: 1fr 5fr;justify-content: center;justify-items: stretch;column-gap: 10px;row-gap: 10px;align-items: start;} div.gridlist-even {display: grid;grid-template-columns: 3fr 5fr;justify-content: center;justify-items: stretch;column-gap: 10px;row-gap: 10px;align-items: start;}</style>';
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

submitBtn.addEventListener('click', submit);