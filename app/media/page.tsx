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
  ];

  return (
    <div className="flex min-h-screen mt-10">
      <VideoClient videos={videos} />
      <Background />
    </div>
  );
}
