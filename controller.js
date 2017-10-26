module.exports = {
    getplanes: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_planes([200]).then(planes => res.status(200).send(planes)).catch(err => {
            console.log(err);
            res.status(500);
        })
    } 
}