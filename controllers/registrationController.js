exports.getPreRegistrationForm = async (req, res) => {
    res.render("signup.ejs");
};

exports.redirect = async (req, res) => {
    console.log(req.query);
    const userType = req.query.userType;
    console.log(userType)
    if (userType === 'student') {
        res.redirect('/student/register');
    } else if (userType === 'company') {
        res.redirect('/company/register');
    } else {
        res.redirect('/');
    }
}