const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
    document.getElementById("myDIV").classList.add("mystyle");
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    }
    document.getElementById("myDIV").classList.remove("mystyle");
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));