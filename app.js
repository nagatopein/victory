const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArgs.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('==================');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

