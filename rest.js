export function userFriends(user, ...friends){
    console.log(user + ' has ' + friends.length+' friends');
    console.log('Their names are');
    for (var i = 0; i<friends.length; i++){
        console.log(friends[i]);
    };
}
