import SerachForm from '../components/SearchForm';
import {Title} from '../styling/style';

const Home = ({images, loading, searchQuery, setSearchQuery}) => (
    <div> 
      <Title>Photo Search Application</Title>
      <SerachForm images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  )

export default Home;