function factory(requirements) {
    const existingComponents = {
        SmallEngine: { power: 90, volume: 1800 },
        NormalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 },
        Hatchback: {
            type: 'hatchback',
            color: ""
        },
        Coupe: {
            type: 'coupe',
            color: ""
        },
        wheels:[]
    }

    let result= {
        model:requirements.model,
        engine:{},
        carriage:{},
        wheels:[]
    }

    
    if (requirements.power<=existingComponents.SmallEngine.power) {
        result.engine[`power`]=existingComponents.SmallEngine.power;
        result.engine[`volume`]=existingComponents.SmallEngine.volume; 
    } else if(requirements.power<=existingComponents.NormalEngine.power) {
        result.engine[`power`]=existingComponents.NormalEngine.power;
        result.engine[`volume`]=existingComponents.NormalEngine.volume;    
    } else if (requirements.power<=existingComponents.MonsterEngine.power) {
        result.engine[`power`]=existingComponents.MonsterEngine.power;
        result.engine[`volume`]=existingComponents.MonsterEngine.volume;
    }
    result.carriage.type=requirements.carriage;
    result.carriage.color=requirements.color;
    let wheel=requirements.wheelsize;
    if(wheel%2==0) {
        wheel--;
    }
    for(let index=0;index<4;index++) {
        result.wheels.push(wheel);
    }
    return result;
}

factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);

factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);