// Code your solution in this file!

function distanceFromHqInBlocks(start) {
    const scuberHQ = 42;
    return(Math.abs(start - scuberHQ))
}

function distanceFromHqInFeet(start) {
    distanceFromHqInBlocks(start);
    const scuberHQ = 42;
    return(Math.abs(start - scuberHQ)*264)
}

function distanceTravelledInFeet(start, destination) {
    return(Math.abs(start - destination)*264)
}

function calculatesFarePrice(start, destination) {
    if (Math.abs(start - destination)*264 <= 400) {
        return 0
    } else if (Math.abs(start - destination)*264 > 400 && (Math.abs(start - destination)*264 < 2000)) {
        return(0.02 * ((Math.abs(start - destination)*264) - 400))
    } else if (Math.abs(start - destination)* 264 > 2000 && (Math.abs(start - destination)*264 < 2500)) {
        return 25
    } else (Math.abs(start - destination)*264 > 2500); {
        return 'cannot travel that far'
    }   
}