export interface ControllerRepository<T, U> {
	getAll: (req: T, res: U) => U
}
