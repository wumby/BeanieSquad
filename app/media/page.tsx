import Background from "@/components/Background";
import VideoClient from "./_components/VideoClient";

export default function VideoPage() {
  const videos = [
    { id: 1, title: "Chaz Puts Em Down", src: "/videos/chaz.mp4" },
    {
      id: 2,
      title: "Chemo with a wet jumper",
      src: "/videos/chemo_airball.mp4",
    },
    {
      id: 3,
      title: "Reggie Gives out Chestnuts",
      src: "/videos/reggie_chestnuts.mp4",
    },
    { id: 4, title: "Willie POTY", src: "/videos/willie_career.mp4" },
    { id: 5, title: "Doo Takes a Kid to School", src: "/videos/doo_park.mp4" },
    { id: 6, title: "Hank Gets Crafty", src: "/videos/hank_crafty.mp4" },
    { id: 7, title: "Hank Joins the Vikings", src: "/videos/hank_vikings.mp4" },
    { id: 8, title: "Mascots Get Jiggy", src: "/videos/mascots_jiggy.mp4" },
    { id: 9, title: "Confusion Into a Lob", src: "/videos/gumby_lob.mp4" },
    {
      id: 10,
      title: "Chemo Gets Embarassed",
      src: "/videos/chemo_crossed.mp4",
    },
    { id: 11, title: "Frank with Anger", src: "/videos/frank_putback.mp4" },
    { id: 12, title: "Shlum Baptizes Soul", src: "/videos/shlum_baptizes.mp4" },
    {
      id: 13,
      title: "Gumby From the Parking Lot",
      src: "/videos/gumby_parkinglot.mp4",
    },
    { id: 14, title: "Shlum Bullies Kid", src: "/videos/shlum_embarasses.mp4" },
  ];

  return (
    <div className="flex min-h-screen mt-10">
      <VideoClient videos={videos} />
      <Background />
    </div>
  );
}
