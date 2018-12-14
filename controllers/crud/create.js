module.exports = (models) => ({
   execute: async (model, data)=> {
       try {
        await models[model].create(data);
        return 1;
       }
       catch (e) {
           console.log("Could not insert model", model, "with data", data);
           console.log(e);
           return -1;
       }
   } 
});