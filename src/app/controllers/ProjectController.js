
const  date=[{id:1, title: 'Projeto', tasks: ["Nova tarefa"]},
            {id:2, title: 'Projeto X', tasks: ["Teste tarefa"]} ];




  
class ProjectController{

   store(req, res) {
    const obj = req.body;
    console.log(obj);
    date.push({
      id: obj.id,
      title: obj.title,
      tasks: obj.tasks,
    });
   
    res.status(200).json({msg: 'Cadastrado com Sucesso!'})
  }

  update(req, res,next) {
    
    const{title} = req.body;
    const {id} = req.params;
    var element = date.filter(item => item.id == id);
    element[0]["title"]=title;
    res.status(200).json( element );
  }

  delete(req, res) {
    const {id} = req.params;
    const x = date.findIndex(item => item.id == id);
    
    //Removendo
    date.splice(x, 1);

    res.status(200).json({msg: 'Elemento Removido!'})
  }


  list(req, res) {
    res.status(200).json( date );
  }

  addTask( req,res ){
    const{title} = req.body;
    const {id} = req.params;
    var element = date.filter(item => item.id == id);
     
    element[0]["tasks"].push(title);

    res.status(200).json( element );
  }

  
}

export function middlwareCheckProjectExists(req,res, next ){
  console.log("testandoo---");
  
  const {id} = req.params;
  const element = date.filter(item => item.id == id);
  
  if(element.length<=0){
    return res.status(400).json({error: 'Dont find project by ID'});
  }
  
  return next();
}

export default new ProjectController();

