/*
export function parent(){
    const message = 'Hello World';

    function child(){
        alert(message);
    }
    child();

}
*/

export function parent(){
    const message = 'Hello World';

    function child(){
        alert(message);
    }
    return child();

}