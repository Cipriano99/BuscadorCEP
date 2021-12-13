import { SyntheticEvent } from 'react';
import axios from 'axios';

import { mostrarResultado } from './mostrarResultado';

export const buscarCEP = async (event: SyntheticEvent, url: string) => {
  event.preventDefault();

  try {
    const { data } = await axios.get(url);

    mostrarResultado(data[0]);
  } catch (error) {
    console.log(error);
  }
};
