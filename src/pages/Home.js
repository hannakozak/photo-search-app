import SerachForm from '../components/SearchForm';
import {Title, Wrapper, BgImage} from '../styling/style';
import {GlobalStyle} from '../styling/globalStyle';
import { Fragment } from 'react';

const Home = ({images, loading, searchQuery, setSearchQuery}) => (
  <Fragment>
    <GlobalStyle />
    <BgImage>
    <Wrapper>
    <Title>Photo Search Application</Title>
    <SerachForm images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </Wrapper>
    </BgImage>
  </Fragment>
    )

export default Home;