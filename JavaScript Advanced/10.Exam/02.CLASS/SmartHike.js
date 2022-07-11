class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        const difference = this.resources - (time * 10);
        if (difference < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources -= time * 10;
        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        })

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }
        if (criteria == 'all') {
            let resultArray = [];
            for (let index = 0; index < this.listOfHikes.length; index++) {
                let currentHike = this.listOfHikes[index];
                resultArray.push(`${this.username} hiked ${currentHike.peak} for ${currentHike.time} hours`)
            }
            resultArray=resultArray.join('\n');
            return [
                `All hiking records:`,
                resultArray
            ].join('\n');
        }

        const filteredHikes = this.listOfHikes.filter((element) => element.difficultyLevel == criteria);

        if (filteredHikes.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }

        let bestHike = {
            time:Number.MAX_SAFE_INTEGER
        }
        for (let index = 0; index < filteredHikes.length; index++) {
            let currentHike = filteredHikes[index];
            if (bestHike.time>currentHike.time) {
                bestHike=currentHike;
            }
        }
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
user.addGoal('aad', 2925);
user.hike('aad', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

