// var status = '😎';

setTimeout(() => {
    const status = '😍';

    const data = {
        status: '🥑',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus()); // авокадо
    console.log(data.getStatus.call(this)); //
}, 0);
