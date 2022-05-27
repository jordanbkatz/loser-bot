function Ready({ client }) {
    return function () {
        console.log(`Logged in to Discord as ${client.user.tag}.`);
    };
}

export default Ready;