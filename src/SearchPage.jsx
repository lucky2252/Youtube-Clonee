import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Laksh Programmer"
        verified
        subs="1.27M"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />

      <hr />

      <VideoRow
        views="510K"
        subs="1.2M"
        description="About AI"
        timestamp="10 days ago"
        channel="Laksh Programmer"
        title="ChatGPT-4: HUGE Announcement for Al Developers"
        image="https://i.ytimg.com/vi/GCIVOMB4fS0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC3tma3u997PfypkF0NDvvPf9c48A"
      />
      <VideoRow
        views="1.7M"
        subs="1.2M"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS . "
        timestamp="20 days ago"
        channel="Laksh Programmer"
        title="Lets Build a youtube clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
      />
      <VideoRow
        views="800K"
        subs="1.2M"
        description="It's been a minute since I've made tutorials on Python, so to cover the long overdue I created the Best Free Python Programming ..."
        timestamp="1 month ago"
        channel="Laksh Programmer"
        title="Python Tutorial for Beginners - Full Course in 12 Hours"
        image="https://i.ytimg.com/vi/B9nFMZIYQl0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtkgmNHaPmQTelxsmgwlZcYXQBWQ"
      />
      <VideoRow
        views="510K"
        subs="1.2M"
        description="This video took 4 months to make. A lot of hard work & love was put into this so you can enjoy it ❤️. There are tons of videos on ..."
        timestamp="2 months ago"
        channel="Laksh Programmer"
        title="A Day in the Life of a Software Engineer | Python Freelancer"
        image="https://i.ytimg.com/vi/2QByYtPEGIs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgfc5Izj3ZJNUREJzyt9QpVFd4PA"
      />
      <VideoRow
        views="300K"
        subs="1.2M"
        description="My friend Naz and I tried learning Typescript in one day. Did we succeed or did we fail...? Well... I guess you'll have to watch the ..."
        timestamp="5 months ago"
        channel="Laksh Programmer"
        title="I tried learning Typescript in 1 day..."
        image="https://i.ytimg.com/vi/kSukGsJ0s9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtiw1jZpg-pbPGxLbFM07jP08RdA"
      />
      <VideoRow
        views="2.5M"
        subs="1.2M"
        description="Here at Clever Programmer we're all about revolutionizing education and the software industry. Join us for this Mini Bootcamp this .."
        timestamp="6 months ago"
        channel="Laksh Programmer"
        title=" React JS 8 Hour Bootcamp (Learn Redux, React JS, Styled Components) | LIVE"
        image="https://i.ytimg.com/vi/Dt3o4l_OFa0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7XbZ_-gT1uazZnh4BBmet2MN42w"
      />
      <VideoRow
        views="1.3M"
        subs="1.2M"
        description="In this Exclusive React VIDEO training, we will be covering... ✓ Learn how to build the FULL Amazon website with FULL ..."
        timestamp="1 year ago"
        channel="Laksh Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs)"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQhP-fa4hpoVZvk3TgJ4G3cWDWTg"
      />
    </div>
  );
}

export default SearchPage;
