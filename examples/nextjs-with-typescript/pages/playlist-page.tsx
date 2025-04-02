import Head from 'next/head';
import '../post-video.css'
import Playlist from '../components/playlist';

function MuxVideoPage() {

  const relatedVideos = [
    {
      imageUrl: "https://d.newsweek.com/en/full/2614934/picture-video.jpg?w=480&h=270&q=75&f=8dbdcf86a118c0f5afb2cba69bd4af24",
      title: "JD Vance Announces He Will Join His Wife On Visit To Greenland",
      playbackId: "DVBhwqkhxkOiLRjUAYJS6mCBJSuC00tB4iWjJmEofJoo",
      adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
      idx: 0
    },
    {
      imageUrl: "https://d.newsweek.com/en/full/2616059/reason-why-woman-trains-specific-arm.jpg?w=480&h=270&q=75&f=5000e727dbcc4e9e9d1ca21b1215c993",
      title: "Reason Why Woman Trains Specific Arm",
      playbackId: "23s11nz72DsoN657h4314PjKKjsF2JG33eBQQt6B95I",
      adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
      idx: 1
    },
    {
      imageUrl: "https://d.newsweek.com/en/full/2616049/picture-video.jpg?w=480&h=270&q=75&f=234a33201b1c5adb080a1bec0cb4a4a0",
      title: "US Official Cars Seen Leaving Greenland Capital After Vance Scales Back Visit",
      playbackId: "DVBhwqkhxkOiLRjUAYJS6mCBJSuC00tB4iWjJmEofJoo",
      adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
      idx: 2
    }
  ];

  return (
    <>
      <Head>
        <title>&lt;Playlist/&gt; Demo</title>
      </Head>
      
      <Playlist videoList={relatedVideos}></Playlist>

    </>
  );
}

export default MuxVideoPage;
