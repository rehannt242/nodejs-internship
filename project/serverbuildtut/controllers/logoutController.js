const User = require('../model/User');

const handleLogout = async(req, res) => {
//on client also delete the access token

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // no content
    const refreshToken = cookies.jwt;
    // is refreshtoken in db
    const foundUser = await User.findOne({refreshToken}).exec();
    if (!foundUser) {
        res.clearCookies('jwt',{httpOnly:true,sameSite:'None',secure:true});
        return res.sendStatus(204);
    }
    //delete refershToken in db

    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookies('jwt',{httpOnly:true,sameSite:'None',secure:true});//secure true - only serves on https
    res.sendStatus(204);
}

module.exports = { handleLogout}