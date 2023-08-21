const User = require('../models/user')
const Post = require('../models/post')
const Response = require('../utils/Response')


const getUsersInfo = async (req,res) => {
 

    const user = await User.findOne({username : req.body.username})
    if(user) {
        return new Response(user, 'kullanıcı bilgileri').success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)
    }

} 

const getUsersPost = async (req,res) => {
       
    

    const user = await User.findOne({username : req.body.username})

    const post = await Post.find({userRef:user._id})

    if(post) {
        return new Response(post, 'kullanıcının postları' ).success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)

    }
    
    

    
} 


const addPost = async (req,res) => {
    const id = await req.user.id

    const title = req.body.title
    const content = req.body.content

    User.findById(id)
    .then(user => {
        const post = new Post({
            title,
            content,
            userRef : user._id
        })
        post.save()
        return new Response(post,"eklenen post").success(res)
    })
}


module.exports ={
    getUsersInfo,getUsersPost,addPost
}