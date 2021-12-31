module.exports = (req,res,next) =>{
    if(req.session.bgColor){
        res.locals.bgColor = req.sesion.bgColor
    }
    next()
}