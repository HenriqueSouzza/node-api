import model from "../models";

async function list(id = {}){
    return await model.contact.findAll({ where: id });
}

async function create(contacts){
    if(Array.isArray(contacts)){
        return await model.contact.bulkCreate(contacts);
    }
    
    return await model.contact.create(contacts);
}

export default { list, create };