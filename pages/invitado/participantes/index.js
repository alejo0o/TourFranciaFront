import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CardParticipante from '../../../components/MainPage/CardParticipante';
import ParticipanteId from '../../../components/Participantes/ParticipanteId';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/participantes');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}
const index = ({ data }) => {
  return (
    <Layout>
      <div style={{ height: '100vh' }}>
        <h2 style={{ margin: '2em' }}>Participantes</h2>
        <CardParticipante data={data} corte={false} />
      </div>
    </Layout>
  );
};

export default index;
