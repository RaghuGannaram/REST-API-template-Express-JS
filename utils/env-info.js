function getCurrentEnv() {
    return process.env.NODE_ENV || 'development';
}

function getCurrentPort() {
    return process.env.PORT || 5000;
}

function getCurrentLogLevel() {
    return process.env.LOG_LEVEL || 'debug';
}

module.exports = { getCurrentEnv, getCurrentPort, getCurrentLogLevel };