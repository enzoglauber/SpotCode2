import React, { Fragment, useEffect, useState } from 'react';
import { Columns, Heading, Image } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Musics from '../musics';

import AlbumsService from '../../services/albums';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Albums = () => {
  const [album, setAlbum] = useState({})
  let { id } = useParams()

  async function fetchAlbum() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data)
  }

  useEffect(() => {
    fetchAlbum();
  }, [])

  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} className='has-text-centered'>
          <Image src={album.cover_url} />
          <DivVSpaced>
            <Heading size={5} className='has-text-white'>{album.title}</Heading>
            <Heading size={6} subtitle className='has-text-white'>{album.artist_name}</Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={album.songs || []} />
    </Fragment>
  )
}
export default Albums