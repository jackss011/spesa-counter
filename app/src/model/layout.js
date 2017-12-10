
export function isPortrait() {
    return window.matchMedia('(orientation: portrait)').matches;
}

export function isMobile() {
    return window.matchMedia('(max-width: 850px)').matches;
}
