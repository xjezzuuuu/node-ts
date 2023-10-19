import express from 'express';
import morgan from 'morgan';

import { type ServerRepository } from '../../domain/contracts/server.repository';
import { expressRoutes } from '../routes';

export class ExpressRepository implements ServerRepository {
	private readonly app;

	constructor() {
		this.app = express();
		this.init();
	}

	private init(): void {
		this.middlewares();
		this.routes();
	}

	private middlewares(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(morgan('dev'));
	}

	private routes(): void {
		this.app.use('/', expressRoutes);
	}

	async listen(port: number | string): Promise<void> {
		this.app.listen(port);
	}
}
