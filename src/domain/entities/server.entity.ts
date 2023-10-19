import { type ServerRepository } from '../contracts/server.repository';

export class Server {
	private readonly app;
	private readonly port;

	constructor(app: ServerRepository, port: number | string) {
		this.app = app;
		this.port = port;
	}

	async listen(): Promise<void> {
		await this.app.listen(this.port);
		console.log(`Server listening on port ${this.port}`);
	}
}
