import ParticipanteId from '../../../components/Noticias/NoticiasId';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';
import NoticiasId from '../../../components/Noticias/NoticiasId';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(process.env.apiURL + `/noticias/${id}`);
  const data = res.data;
  console.log(data);

  return {
    props: { noticia: data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ noticia }) => {
  return (
    <div>
      <Layout>
        <h2 style={{ margin: '2em' }}>Noticia</h2>
        <NoticiasId noticia={noticia} />
      </Layout>
    </div>
  );
};

export default index;
