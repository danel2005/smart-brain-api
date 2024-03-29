const handleProfile = (db) => (req, res) => {
    const { id } = req.params;

    db.select('*').from('users').where({id})
        .then(user => {
            user.length > 0
            ? res.json(user[0])
            : res.status(400).json('Not Found')
        })
        .catch(err => res.status(400).json('error getting user!'));
}

module.exports = {
    handleProfile: handleProfile
}