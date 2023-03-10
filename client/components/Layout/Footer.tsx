import Image from "next/image";
interface propTeam {
  memberInfo: team;
}
interface team {
  devRole: string;
  name: string;
  github: string;
}

function Banner() {
  return (
    <a
      className="flex flex-col mx-auto my-1 w-fit "
      href="https://github.com/EthanJcoding/sprint_shopping-mall"
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-center text-white">Team GitHub</span>
      <div className="flex flex-col mt-2 text-center md:flex-row">
        <span className="text-2xl leading-8 text-center text-white">
          Sprint-Project  |  올취생 스터디
        </span>
      </div>
    </a>
  );
}

function Member({ memberInfo }: propTeam) {
  const { devRole, name, github } = memberInfo;
  return (
    <div className="inline-block w-20 mx-3 text-center py-3">
      <div className="flex flex-col items-center">
        <a
          className="my-1 text-white hover:text-emerald-400"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
        <div className="text-white text-xs border-solid border-2 border-white px-2 rounded-full pb-0.5 mt-1 w-fit">
          {devRole}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const teamMember: team[] = [
    {
      devRole: "Front-End",
      name: "정준일",
      github: "https://github.com/EthanJcoding",
    },
    {
      devRole: "Front-End",
      name: "김명환",
      github: "https://github.com/kongchip",
    },
  ];
  return (
    <div className="flex flex-col px-6 bg-green-700 border-t">
      <Banner />
      <div className="flex justify-center items-center">
        {teamMember.map((member, index) => {
          return <Member key={index} memberInfo={member} />;
        })}
      </div>

      <div className="py-2 text-center text-white/50">logo & product design <a href="https://www.instagram.com/galmetbit/">heechan yang</a></div>
    </div>
  );
}
