function logger() {
    console.log('I am logging: ', this);
};

logger.call('Test Call()');