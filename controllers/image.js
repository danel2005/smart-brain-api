const handleImage = (db) => (req, res) => {
    const { id } = req.body;

    db('users').where({id})
        .increment('entries', 1)
        .returning('entries')
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries);
        })
        .catch(err => res.status(400).json('error getting entries!'));
}

module.exports = {
    handleImage: handleImage
}