// components/MuxVideo.tsx
import React from 'react'
import MuxPlayer from '@mux/mux-player-react'

export type MuxVideoProps = {
  /** The Mux playback ID from your Sanity asset */
  playbackId: string
  /** Optionally show a poster frame (e.g. a Sanity thumbnail URL) */
  poster?: string
  /** Any extra class names for sizing / layout */
  className?: string
  /** Pass through any Misc HTMLVideo or MuxPlayer props */
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export const MuxVideo: React.FC<MuxVideoProps> = ({
  playbackId,
  poster,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      className={className}
    />
  )
}
