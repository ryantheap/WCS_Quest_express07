const login = (req, res) => {

    const { email, password } = req.body;

    if(email === "dwight@theoffice.com" && password === "123456") {
        console.warn("");
    }
}

module.exports = {
    login
};