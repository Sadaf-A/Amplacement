exports.getPreLoginForm = async (req, res) => {
    res.render("login.ejs");
};

exports.redirect = async (req, res) => {
    console.log(req.query);
    const userType = req.query.userType;
    console.log(userType)
    if (userType === 'student') {
        console.log("oh lord im redirecting")
        res.redirect('/student/login');
    } else if (userType === 'company') {
        res.redirect('/company/login');
    } else {
        res.redirect('/');
    }
}