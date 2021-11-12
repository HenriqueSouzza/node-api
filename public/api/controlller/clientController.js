
async function index(req, res, next) {
    res.status(200).json({response: 'listar clientes'})
}

async function store(req, res, next) {
    res.status(201).json({response: 'salvar cliente'})
}

export default { index, store };
