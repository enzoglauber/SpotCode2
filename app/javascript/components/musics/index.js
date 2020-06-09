import React, { Fragment, useEffect, useState } from 'react';
import { Button, Columns } from 'react-bulma-components';
import styled from 'styled-components';

import Music from './music';

const PlaySequenceButton = styled(Button)`
  margin-bottom: 30px;
`
const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    setSongs(props.songs.map((song, key) =>
      <Music
        key={key}
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        artist_name={props.artist_name}
      />
    ))
  }, [props.songs, playing])

  return (
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{ size: 2 }} mobile={{ size: 12 }} className='has-text-centered'>
          <PlaySequenceButton
            className='is-medium'
            color='primary'
            outlined>
            Tocar em sequência
          </PlaySequenceButton>
        </Columns.Column>
      </Columns>
      {songs}
    </Fragment>
  )
}
export default Musics;