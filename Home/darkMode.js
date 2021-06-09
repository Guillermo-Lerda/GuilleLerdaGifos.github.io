window.onload = () => {

    // DESKTOP DARK MODE

    const modoSwitch = document.getElementById('modoSwitch');

    modoSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        modoSwitch.classList.toggle('active');


        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }
    });

    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark');
        modoSwitch.classList.add('active');
    } else {
        document.body.classList.remove('dark');
        modoSwitch.classList.remove('active');
    }

    // MOBILE DARK MODE

    const modoSwitchMobile = document.getElementById('modoSwitchMobile')

    modoSwitchMobile.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        modoSwitch.classList.toggle('active');


        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }
    });

    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark');
        modoSwitch.classList.add('active');
    } else {
        document.body.classList.remove('dark');
        modoSwitch.classList.remove('active');
    }
}