const asyncHandler = (requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}

// Using promise


// Using Try catch block
// const asyncHandler = ( fn )=> async (req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.satus(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }
