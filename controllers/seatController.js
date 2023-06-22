const getSeatController = async (req,res) =>{
    try {
        
    } catch (error) {
        res.status(500).send({
            "Error in Controllers" : error.message
        })
    }
}


const getSeatControllerById = async (req,res) =>{
    try {
        
    } catch (error) {
        res.status(500).send({
            "Error in Controllers" : error.message
        })
    }     
}


module.exports = {
    getSeatController,
    getSeatControllerById
}