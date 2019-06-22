const logger = (req, res, next) => {
    console.log(newDate().toLocaleString());
    next();
}

module.exports = logger;