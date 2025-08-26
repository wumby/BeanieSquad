import Background from "@/components/Background";
import VideoClient from "./_components/VideoClient";

export default function VideoPage() {
  const videos = [
    {
      id: 1,
      title: "Chaz Puts Em Down",
      src: "/videos/chaz.mp4",
      game: "2k25",
    },
    {
      id: 2,
      title: "Chemo with a wet jumper",
      src: "/videos/chemo_airball.mp4",
      game: "2k25",
    },
    {
      id: 3,
      title: "Reggie Gives out Chestnuts",
      src: "/videos/reggie_chestnuts.mp4",
      game: "2k25",
    },
    {
      id: 4,
      title: "Willie POTY",
      src: "/videos/willie_career.mp4",
      game: "2k25",
    },
    {
      id: 5,
      title: "Doo Takes a Kid to School",
      src: "/videos/doo_park.mp4",
      game: "2k25",
    },
    {
      id: 6,
      title: "Hank Gets Crafty",
      src: "/videos/hank_crafty.mp4",
      game: "2k25",
    },
    {
      id: 7,
      title: "Hank Joins the Vikings",
      src: "/videos/hank_vikings.mp4",
      game: "2k25",
    },
    {
      id: 8,
      title: "Mascots Get Jiggy",
      src: "/videos/mascots_jiggy.mp4",
      game: "2k25",
    },
    {
      id: 9,
      title: "Confusion Into a Lob",
      src: "/videos/gumby_lob.mp4",
      game: "2k25",
    },
    {
      id: 10,
      title: "Chemo Gets Embarassed",
      src: "/videos/chemo_crossed.mp4",
      game: "2k25",
    },
    {
      id: 11,
      title: "Frank with Anger",
      src: "/videos/frank_putback.mp4",
      game: "2k25",
    },
    {
      id: 12,
      title: "Shlum Baptizes Soul",
      src: "/videos/shlum_baptizes.mp4",
      game: "2k25",
    },
    {
      id: 13,
      title: "Gumby From the Parking Lot",
      src: "/videos/gumby_parkinglot.mp4",
      game: "2k25",
    },
    {
      id: 14,
      title: "Shlum Bullies Kid",
      src: "/videos/shlum_embarasses.mp4",
      game: "2k25",
    },
    {
      id: 15,
      title: "Droopy gets Chestnuts after Vacation",
      src: "/videos/droopy_chestnuts.mp4",
      game: "2k25",
    },
    {
      id: 16,
      title: "Doo Dunks and Taunts",
      src: "/videos/doo_taunt.MP4",
      game: "2k25",
    },
    {
      id: 17,
      title: "Wumby Commits Felony",
      src: "/videos/wumby_commits_felony.MP4",
      game: "2k25",
    },
    {
      id: 18,
      title: "Steve and Tucker B2B",
      src: "/videos/steve_tucker.MP4",
      game: "2k17",
    },
    {
      id: 19,
      title: "Tucker Takes Flight",
      src: "/videos/tucker_flies.MP4",
      game: "2k14",
    },
    {
      id: 20,
      title: "Opponent Has CTE",
      src: "/videos/opponent_has_cte.MP4",
      game: "2k25",
    },
    {
      id: 21,
      title: "Double-R Loves Honey",
      src: "/videos/double_r_honey.MP4",
      game: "2k25",
    },
    {
      id: 22,
      title: "Double Dose of Testes",
      src: "/videos/double_dose_testes.mp4",
      game: "2k25",
    },
    {
      id: 23,
      title: "Chemo With a Strong Take",
      src: "/videos/chemo_strong_take.mp4",
      game: "2k25",
    },
    {
      id: 24,
      title: "Carrot Cake Show Off",
      src: "/videos/cc_flies.mp4",
      game: "2k25",
    },
    {
      id: 25,
      title: "Larry Clamps FTW",
      src: "/videos/larry_clamps_ftw.mp4",
      game: "2k25",
    },
    {
      id: 26,
      title: "Wumby Owl Vision",
      src: "/videos/wumby_owl_vision.mp4",
      game: "2k25",
    },
    {
      id: 27,
      title: "Squad Tries Pushups",
      src: "/videos/beanie_squad_pushups.mp4",
      game: "2k25",
    },
    {
      id: 28,
      title: "Gumby Jelly",
      src: "/videos/gumby_jelly.mp4",
      game: "2k25",
    },
    {
      id: 29,
      title: "Donald Goes Swimming",
      src: "/videos/donald_swimming.mp4",
      game: "2k25",
    },
    {
      id: 30,
      title: "Three Musketeers",
      src: "/videos/three_musketeers.mp4",
      game: "2k25",
    },
    {
      id: 31,
      title: "Keanus Vision",
      src: "/videos/keanu_vision.mp4",
      game: "2k25",
    },
  ];

  return (
    <div className="flex min-h-screen mt-10">
      <VideoClient videos={videos} />
      <Background />
    </div>
  );
}
