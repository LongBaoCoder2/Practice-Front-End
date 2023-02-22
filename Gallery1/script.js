const track = document.getElementById('image-track');
window.onmousedown = e => {
    track.dataset.mouseDownAt =  e.clientX;
}
window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;
    
    const delta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = -(delta / maxDelta) * 100
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage
    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -100)


    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 2000, fill: "forwards"})

    track.dataset.percentage = nextPercentage

    track.dataset.setPrepercentage = nextPercentage
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage
}

for (const image of track.getElementsByTagName('img')){
    image.animate({
        objectPosition: `${nextPercentage + 100}% 50%`
    }, {duration: 1200, fill: "forwards"})
}