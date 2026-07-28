const CarDetails = ({ brand, km, color, newCar }) => {

  return (
    <div>Detalhes do carro:
    <ul>
        <li> Marca: {brand}</li>
        <li> quilometragem: {km}</li>
        <li> Cor: {color}</li>
    </ul>
    </div>
  );
};

export default CarDetails;