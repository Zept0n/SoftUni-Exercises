function follow(input) {
    let followers={};
    while(input[0]!="Log out") {
        let tokens=input.shift().split(": ");
        let command=tokens[0];
        let username=tokens[1];
        if (command==="New follower") {
            if (!(followers.hasOwnProperty(username))) {
                followers[username]=0;
            }
        } else if(command==="Like") {
            let likes=Number(tokens[2]);
            if (!(followers.hasOwnProperty(username))) {
                followers[username]=likes;
            } else {
                followers[username]+=likes;
            }

        } else if(command==="Comment") {
            if (!(followers.hasOwnProperty(username))) {
                followers[username]=1;
            } else {
                followers[username]+=1;
            }
        } else if(command==="Blocked") {
            if (!(followers.hasOwnProperty(username))) {
                console.log(`${username} doesn't exist.`);
            } else {
                delete followers[username];
            }
        }
    }
    let followersArray=Object.entries(followers);
    console.log(`${followersArray.length} followers`)
    for (let [follower,sumOfLikeAndComment] of followersArray) {
        console.log(`${follower}: ${sumOfLikeAndComment}`)
    }
}

follow((["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])
);
follow((["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"])
);

follow((["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])
);