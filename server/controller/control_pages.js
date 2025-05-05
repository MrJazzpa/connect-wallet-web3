exports.home = async(req,res)=>{
     const local ={
         title:"Home"
     }
     res.render('index',{local});
}
exports.features = async(req,res)=>{
    const local ={
        title:"Features"
    }
    res.render('feature',{local});
}

exports.wallet = async(req,res)=>{
    const local ={
        title:"Connect to wallet"
    }
    res.render('wallets',{local});
}