export default interface Event {
  type: string;
  primary?: any;
  secondary: number;
  avatarSeed: string | undefined;
}
