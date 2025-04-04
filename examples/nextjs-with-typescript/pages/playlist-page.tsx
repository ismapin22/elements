import Head from 'next/head';
import '../post-video.css'
import Playlist from '../components/playlist';

function MuxVideoPage() {

  const relatedVideos = [
    {
      imageUrl: "https://image.mux.com/DVBhwqkhxkOiLRjUAYJS6mCBJSuC00tB4iWjJmEofJoo/thumbnail.jpg",
      title: "Test video title 1",
      playbackId: "DVBhwqkhxkOiLRjUAYJS6mCBJSuC00tB4iWjJmEofJoo",
      adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
    },
    {
      imageUrl: "https://image.mux.com/23s11nz72DsoN657h4314PjKKjsF2JG33eBQQt6B95I/thumbnail.jpg",
      title: "Test video title 2",
      playbackId: "23s11nz72DsoN657h4314PjKKjsF2JG33eBQQt6B95I",
      adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
    },
    {
      imageUrl: "https://image.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/thumbnail.jpg",
      title: "Test video title 3",
      playbackId: "DS00Spx1CV902MCtPj5WknGlR102V5HFkDe",
      adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=",
    },
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
