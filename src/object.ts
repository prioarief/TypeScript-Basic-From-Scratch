type Players = {
  name: string;
  no: number;
  club: string;
  skills: string[];
  isLawak: boolean;
};

const data: Players = {
  name: "Messi",
  no: 10,
  club: "Barcelona",
  skills: ["Diving", "Penalty", "Dribling", "Freekick"],
  isLawak: true,
};

console.log(data);
