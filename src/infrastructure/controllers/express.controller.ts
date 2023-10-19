import { type Request, type Response } from 'express';
import { type ControllerRepository } from '../../domain/contracts/controller.repository';

export class ExpressController implements ControllerRepository<Request, Response> {
	getAll(req: Request, res: Response): Response {
		const urlPath = req.url;

		return res.status(200).json([{ msg: 'Hello World', path: urlPath }]);
	}
}
