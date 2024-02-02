
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
            
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
    async destroy(id){
        try {
            const result=await this.model.findByIdAndRemove(id);
            return result;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
  async get(id){
    try {
        const result=await this.model.findById(id);
        return result;
        
    } catch (error) {
        console.log('Something went wrong');
            throw error;
    }
  }
  async getAll(){
    try {
        const result=await this.model.find({});
        return result;
        
    } catch (error) {
        console.log('Something went wrong');
            throw error;
    }
  }

  async update(id,data){ //basic update function 
    try {
        const result=await this.model.findByIdAndUpdate(id,data,{new:true}); //this new:true is for reflecting the updated data in console
        return result;
        
    } catch (error) {
        console.log('Something went wrong');
            throw error;
    }
  }





}
export default CrudRepository;