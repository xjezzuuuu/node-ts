import { Server } from './domain/entities/server.entity';
import { ExpressRepository } from './infrastructure/repositories/express.repository';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT ?? 3000;
const app = new ExpressRepository();
const server = new Server(app, port);

async function bootstrap(): Promise<void> {
	await server.listen();
}

void bootstrap();
