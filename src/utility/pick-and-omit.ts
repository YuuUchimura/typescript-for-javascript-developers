export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
type SmallProfile = Omit<DetailedProfile, "height">;



type aaa = {
  name: string;
  age: number;
  bool: boolean;
  Name?: string | null;
};

type a = keyof aaa


type sample = {
  name: string;
  age: number;
  nickName?: string | null;
};
