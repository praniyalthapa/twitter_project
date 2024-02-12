import {CommentRepository,TweetRepository} from "../repository/index.js";

class CommentService{
    constructor(){
        this.commentRepo=new CommentRepository();
        this.tweetRepo=new TweetRepository();
    }
async createComment(modelId,modelType,userId){

    if(modelType == 'Tweet') {
        var commentable = await this.tweetRepository.get(modelId);
    } else if(modelType == 'Comment') {
        // TODO
        var likeable=await this.CommentRepository.get(modelId);
    } else {
        throw new Error('unknown model type');
    }
    const comment=await this.CommentRepository.create({
        content:content,
        userId:userId,
        onModel:modelType,
        commentable:modelId,
        comments:[]
    });
    commentable.comments.push(comment);
    await commentable.save();
    return comment;
}




}