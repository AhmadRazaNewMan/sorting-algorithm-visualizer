export const max_animation_speed  = 400;
export const min_animation_speed = 100;

export function generateRandomNumberFromInterval(min:number,max:number){

    return Math.floor(Math.random() * (max - min +1) + min)
}