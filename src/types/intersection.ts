export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverrage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const uchimura: Batter1 = {
  battingAverrage: 0.7,
  // throwingSpeed: 154,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverrage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const ootani: TwoWayPlayer = {
  battingAverrage: 0.7,
  throwingSpeed: 154,
};
