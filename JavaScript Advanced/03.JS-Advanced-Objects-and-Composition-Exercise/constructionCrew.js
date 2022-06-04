function crew(worker) {
    if (worker.dizziness==true) {
        let ammountToIntake=(worker.weight*0.1)*worker.experience
        worker[`levelOfHydrated`]+=ammountToIntake;
        worker[`dizziness`]=false;
    }
    return worker;
}

crew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
);

crew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);
crew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
);
