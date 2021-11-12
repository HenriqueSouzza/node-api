import ContactService from '../service/contactService';

async function index(req, res, next) {
    try {
        const response = await ContactService.list(req.params); 
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

async function store(req, res, next) {
    try {
        await ContactService.create(req.body);
        return res.status(201).json({ message: 'at created' });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export default { index, store };
