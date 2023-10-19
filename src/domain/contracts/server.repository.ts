export interface ServerRepository {
	listen: (port: number | string) => Promise<void>
}
