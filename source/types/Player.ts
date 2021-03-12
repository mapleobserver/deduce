export default interface Player {
  id?: string;
  pot?: number;
  pack: Map<string, { id: string; count: number }>;
  status: Set<string>;
  items: Map<string, string>;
}
