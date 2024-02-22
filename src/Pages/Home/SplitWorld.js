export function SplitWorld(input){
    return input
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1))
    .join(' ');
}

