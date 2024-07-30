import User from '../../data/models/user.mjs';
import catchError from '../../utils/catchError.mjs';

const getAll = catchError(async (req, res) => {
    const result = await User.findAll() //select * from user
    return res.json(result)
});

const create = catchError(async (req, res) => {
    const result = await User.create(req.body)
    // consolelog(req.body)
    return res.status(200).json(result)
});

export {
    getAll,
    create
};