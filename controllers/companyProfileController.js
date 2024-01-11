exports.getCompanyProfile = (req, res) => {
    const name = req.query.name;
    res.render('companyProfile', { check: 'profile', name: name});
};
