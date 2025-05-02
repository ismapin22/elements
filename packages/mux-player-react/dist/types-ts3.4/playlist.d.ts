import React from 'react';
export interface VideoItem {
    imageUrl: string;
    title: string;
    playbackId: string;
    adTagUrl: string;
}
export type PlaylistVideos = VideoItem[];
export interface PlaylistProps {
    videoList: PlaylistVideos;
}
export declare const Playlist: ({ videoList }: PlaylistProps) => React.JSX.Element;
