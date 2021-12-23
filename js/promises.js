console.log('Request data...');

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working',
        };
        resolve(backendData);
    }, 2000);
});

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    });
})
    .then((clientData) => {
        clientData.fromPromise = true;
        return clientData;
    })
    .then((data) => {
        console.log('Data received', data);
    })
    .catch((error) => console.error(error))
    .finally(() => {
        console.log('Finnaly');
    });

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

sleep(2000).then(() => console.log('after 2 seconds'));
sleep(3000).then(() => console.log('after 3 seconds'));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises');
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises');
});
